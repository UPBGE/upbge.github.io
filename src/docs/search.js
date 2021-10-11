/*
 * This file includes a cleaned-up version of searchtools.js included in
 * Sphinx project. The original copyright is as below:
 *
 * :copyright: Copyright 2007-2021 by the Sphinx team, see AUTHORS.
 * :license: BSD, see LICENSE for details.
 *
 */
import { split, Stemmer, stopwords } from './language_data'

const Search = {
  getIndex: function () {
    return this._index
  },
  setIndex: function (index) {
    this._index = index
  },
}

// Needs to be global since it's a bridge to the legacy search script.
window.Search = Search

const Indexes = {
  '/docs/latest/manual': '/docs/latest/manual/searchindex.js',
  '/docs/latest/api': '/docs/latest/api/searchindex.js',
  '/docs/v0.2.5': '/docs/v0.2.5/searchindex.js',
}

const Scorer = {
  // query matches the full name of an object
  objNameMatch: 11,
  // or matches in the last dotted part of the object name
  objPartialMatch: 6,
  // Additive scores depending on the priority of the object
  objPrio: {
    0: 15, // used to be importantResults
    1: 5, // used to be objectResults
    2: -5,
  }, // used to be unimportantResults
  //  Used when the priority is not in the mapping.
  objPrioDefault: 0,

  // query found in title
  title: 15,
  partialTitle: 7,
  // query found in terms
  term: 5,
  partialTerm: 2,
}

export class SearchHit {
  constructor(path, title, anchor, description, score, terms) {
    this._path = path

    this.title = title
    this.anchor = anchor
    this.description = description
    this.score = score
    this.terms = terms
  }

  get path() {
    const segments = [this._path, '.html']

    if (this.anchor) {
      segments.push('#')
      segments.push(this.anchor)
    }

    return segments.join('')
  }
}

class SearchService {
  constructor() {
    this._indexData = null
    this._docRoot = null
    this._stemmer = new Stemmer()
  }

  get stemmer() {
    return this._stemmer
  }

  get docRoot() {
    return this._docRoot
  }

  async search(keyword) {
    if (!this._indexData) {
      throw Error('No index data has been loaded yet.')
    }

    const index = await this._indexData

    return this.searchWithIndex(keyword, index)
  }

  searchWithIndex(keyword, index) {
    // stem the search terms and add them to the correct list
    const searchTerms = []
    const excluded = []
    const hlTerms = []
    const tmp = split(keyword)
    const objectTerms = []

    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] !== '') {
        objectTerms.push(tmp[i].toLowerCase())
      }

      if (tmp[i] === '' || stopwords.includes(tmp[i].toLowerCase())) {
        continue
      }

      // stem the word
      let word = this.stemmer.stemWord(tmp[i].toLowerCase())

      // prevent stemmer from cutting word smaller than two chars
      if (word.length < 3 && tmp[i].length >= 3) {
        word = tmp[i]
      }

      let toAppend

      // select the correct list
      if (word[0] === '-') {
        toAppend = excluded
        word = word.substr(1)
      } else {
        toAppend = searchTerms
        hlTerms.push(tmp[i].toLowerCase())
      }
      // only add if not already in the list
      if (!toAppend.includes(word)) {
        toAppend.push(word)
      }
    }

    // prepare search
    const terms = index.terms
    const titleTerms = index.titleterms

    // array of [filename, title, anchor, descr, score]
    let results = []

    // lookup as object
    for (let i = 0; i < objectTerms.length; i++) {
      const others = [].concat(
        objectTerms.slice(0, i),
        objectTerms.slice(i + 1, objectTerms.length)
      )

      results = results.concat(
        this.performObjectSearch(objectTerms[i], others, index)
      )
    }

    // lookup as search terms in fulltext
    results = results.concat(
      this.performTermsSearch(searchTerms, excluded, terms, titleTerms, index)
    )

    // now sort the results by score (in opposite order of appearance, since the
    // display function below uses pop() to retrieve items) and then
    // alphabetically
    results.sort(function (a, b) {
      let left = a.score
      let right = b.score

      if (left > right) {
        return -1
      } else if (left < right) {
        return 1
      } else {
        // same score: sort alphabetically
        left = a.title.toLowerCase()
        right = b.title.toLowerCase()

        return left > right ? 1 : left < right ? -1 : 0
      }
    })

    return {
      hits: results,
      query: keyword,
      searchTerms: searchTerms,
      highlightedTerms: hlTerms,
    }
  }

  /**
   * search for object names
   */
  performObjectSearch(object, otherTerms, index) {
    const docNames = index.docnames
    const objects = index.objects
    const objNames = index.objnames
    const titles = index.titles

    const results = []

    for (let prefix in objects) {
      for (let name in objects[prefix]) {
        const fullName = (prefix ? prefix + '.' : '') + name
        const fullNameLower = fullName.toLowerCase()

        if (fullNameLower.indexOf(object) > -1) {
          let score = 0

          const parts = fullNameLower.split('.')
          // check for different match types: exact matches of full name or
          // "last name" (i.e. last dotted part)
          if (fullNameLower === object || parts[parts.length - 1] === object) {
            score += Scorer.objNameMatch
            // matches in last name
          } else if (parts[parts.length - 1].indexOf(object) > -1) {
            score += Scorer.objPartialMatch
          }

          const match = objects[prefix][name]
          const objName = objNames[match[1]][2]
          const title = titles[match[0]]

          // If more than one term searched for, we require other words to be
          // found in the name/title/description
          if (otherTerms.length > 0) {
            const haystack = [prefix, name, objName, title]
              .join(' ')
              .toLowerCase()

            let allFound = true

            for (let i = 0; i < otherTerms.length; i++) {
              if (haystack.indexOf(otherTerms[i]) === -1) {
                allFound = false
                break
              }
            }

            if (!allFound) {
              continue
            }
          }

          const description = [objName, ', in ', title].join('')

          let anchor = match[3]

          if (anchor === '') {
            anchor = fullName
          } else if (anchor === '-') {
            anchor = objNames[match[1]][1] + '-' + fullName
          }

          // add custom score for some objects according to scorer
          if (Object.prototype.hasOwnProperty.call(Scorer.objPrio, match[2])) {
            score += Scorer.objPrio[match[2]]
          } else {
            score += Scorer.objPrioDefault
          }

          results.push(
            new SearchHit(
              docNames[match[0]],
              fullName,
              anchor,
              description,
              score,
              otherTerms
            )
          )
        }
      }
    }

    return results
  }

  performTermsSearch(searchTerms, excluded, terms, titleTerms, index) {
    const docNames = index.docnames
    const titles = index.titles

    const fileMap = {}
    const scoreMap = {}
    const results = []

    // perform the search on the required terms
    for (let i = 0; i < searchTerms.length; i++) {
      let files = []

      const word = searchTerms[i]
      const _o = [
        { files: terms[word], score: Scorer.term },
        { files: titleTerms[word], score: Scorer.title },
      ]

      // add support for partial matches
      if (word.length > 2) {
        const word_regex = word.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')

        for (let w in terms) {
          if (w.match(word_regex) && !terms[word]) {
            _o.push({ files: terms[w], score: Scorer.partialTerm })
          }
        }

        for (let w in titleTerms) {
          if (w.match(word_regex) && !titleTerms[word]) {
            _o.push({ files: titleTerms[w], score: Scorer.partialTitle })
          }
        }
      }

      // no match but word was a required one
      if (_o.every((o) => o.files === undefined)) {
        break
      }

      // found search word in contents
      _o.forEach((o) => {
        let _files = o.files

        if (_files === undefined) return

        if (_files.length === undefined) {
          _files = [_files]
        }

        files = files.concat(_files)

        // set score for the word in each file to Scorer.term
        for (let j = 0; j < _files.length; j++) {
          const file = _files[j]

          if (!(file in scoreMap)) {
            scoreMap[file] = {}
          }

          scoreMap[file][word] = o.score
        }
      })

      // create the mapping
      for (let j = 0; j < files.length; j++) {
        const file = files[j]

        if (file in fileMap && fileMap[file].indexOf(word) === -1) {
          fileMap[file].push(word)
        } else {
          fileMap[file] = [word]
        }
      }
    }

    // now check if the files don't contain excluded terms
    for (let file in fileMap) {
      let valid = true

      // check if all requirements are matched
      const filteredTermCount = searchTerms.filter(function (term) {
        // as search terms with length < 3 are discarded: ignore
        return term.length > 2
      }).length

      if (
        fileMap[file].length !== searchTerms.length &&
        fileMap[file].length !== filteredTermCount
      )
        continue

      // ensure that none of the excluded terms is in the search result
      for (let i = 0; i < excluded.length; i++) {
        if (
          terms[excluded[i]] === file ||
          titleTerms[excluded[i]] === file ||
          (terms[excluded[i]] || []).includes(file) ||
          (titleTerms[excluded[i]] || []).includes(file)
        ) {
          valid = false
          break
        }
      }

      // if we have still a valid result we can add it to the result list
      if (valid) {
        // select one (max) score for the file.
        // for better ranking, we should calculate ranking by using words statistics like basic tf-idf...
        const score = Math.max(fileMap[file].map((w) => scoreMap[file][w]))

        results.push(
          new SearchHit(
            docNames[file],
            titles[file],
            null,
            null,
            score,
            searchTerms
          )
        )
      }
    }

    return results
  }

  loadIndex(url) {
    let index, docRoot

    for (const root in Indexes) {
      if (
        Object.prototype.hasOwnProperty.call(Indexes, root) &&
        url.startsWith(root)
      ) {
        index = Indexes[root]
        docRoot = root
        break
      }
    }

    if ((index && docRoot === this._docRoot) || !index) {
      return
    }

    this._docRoot = null

    this._indexData = fetch(index)
      .then((r) => r.text())
      .then(eval)
      .then((_) => {
        this._docRoot = docRoot

        return window.Search.getIndex()
      })
  }
}

export default new SearchService()
