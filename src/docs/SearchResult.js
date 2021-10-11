import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words'
import { RefreshIcon, XCircleIcon } from '@heroicons/react/solid'

const parser = new DOMParser()

const SearchResult = ({
  title,
  url,
  terms,
  description,
  summaryLength = 240,
}) => {
  const [summary, setSummary] = useState()
  const [error, setError] = useState()

  function summarize(source) {
    const text = parser
      .parseFromString(source, 'text/html')
      .querySelector('[role=main]')?.textContent

    let start = 0

    const textLower = text.toLowerCase()

    terms.forEach((k) => {
      const i = textLower.indexOf(k.toLowerCase())

      if (i > -1) {
        start = i
      }
    })

    start = Math.max(start - summaryLength / 2, 0)

    return (
      (start > 0 ? '...' : '') +
      text.substr(start, summaryLength).trim() +
      (start + summaryLength - text.length ? '...' : '')
    )
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(summarize)
      .then((s) => setSummary(s))
      .catch((reason) => {
        console.error(reason)
        setError(`Failed to load the requested page: ${url}`)
      })
  })

  return (
    <div className={'my-8'}>
      <Link to={url}>
        <h2>{title}</h2>
      </Link>

      {description && <p className={'my-2'}>{description}</p>}

      <div>
        {summary && (
          <Highlighter
            highlightClassName={'bg-upbge'}
            searchWords={terms}
            autoEscape={true}
            textToHighlight={summary}
          />
        )}

        {!summary && !error && (
          <div className={'h-16 flex items-center'}>
            <RefreshIcon className={'animate-spin h-5 mr-1'} />
            <span className={'animate-pulse'}>Loading page contents...</span>
          </div>
        )}

        {error && (
          <p className={'text-red-500 py-2 flex items-center'}>
            <XCircleIcon className={'h-5 mr-1'} />
            {error}
          </p>
        )}
      </div>
    </div>
  )
}

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  terms: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  summaryLength: PropTypes.number,
}

export default SearchResult
