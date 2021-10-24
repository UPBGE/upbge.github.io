import { useCallback, useEffect, useState } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import {
  BookmarkIcon,
  ChevronDoubleLeftIcon,
  RefreshIcon,
  SearchIcon,
  XCircleIcon,
} from '@heroicons/react/solid'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

import Spinner from 'react-spinners/MoonLoader'

import parse from './sphinx'
import SearchService from './search'
import SearchResult from './SearchResult'
import LazyLoad from 'react-lazyload'
import tw from 'tailwind-styled-components'
import Dropdown from '../common/Dropdown'
import MenuItem from '../common/MenuItem'

function getTitle(url) {
  if (url.startsWith('/docs/latest/manual')) {
    return 'UPBGE Manual (current)'
  } else if (url.startsWith('/docs/latest/api')) {
    return 'UPBGE API Reference (current)'
  } else if (url.startsWith('/docs/v0.2.5')) {
    return 'UPBGE Documentation (v0.2.5)'
  }

  return 'UPBGE Documentation'
}

const colors = resolveConfig(tailwindConfig).theme.colors

const Button = tw.button`p-1 px-2 bg-gray-400 dark:bg-gray-950 border-gray-200 
  text-gray-950 dark:text-white cursor-pointer`

const EmbedSphinx = () => {
  const { url } = useRouteMatch()
  const { path } = useParams()

  const [navigation, setNavigation] = useState()
  const [content, setContent] = useState()
  const [keyword, setKeyword] = useState()
  const [searching, setSearching] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [query, setQuery] = useState()
  const [error, setError] = useState()
  const [sideMenuVisible, setSideMenuVisible] = useState(false)

  const [hits, setHits] = useState([])

  useEffect(() => {
    if (url.indexOf('.html') === -1) {
      return
    }

    // Handle browsers that escape '#' in url (e.g. Falkon).
    const index = url.indexOf('%23')

    let effectiveUrl = url
    let effectivePath = path

    if (index !== -1) {
      effectiveUrl = url.substring(index)
      effectivePath = url.substring(0, index)
    }

    SearchService.loadIndex(effectiveUrl)

    const loadPage = (html) => {
      const { navTree, contentTree } = parse(html, effectiveUrl, effectivePath)

      setNavigation(navTree)
      setContent(contentTree)
    }

    setError(null)
    setFetching(true)

    fetch(effectiveUrl)
      .then((res) => res.text())
      .then(loadPage)
      .catch((reason) => {
        console.error(reason)
        setError(`Failed to load the requested page: ${effectiveUrl}`)
      })
      .finally(() => {
        setFetching(false)

        const segments = document.location.hash.replace('%23', '#').split('#')

        if (segments.length === 3) {
          document.getElementById(segments[2])?.scrollIntoView()
        }
      })
  }, [url, path])

  const onSearch = useCallback(
    (e) => {
      setError(null)
      setSearching(true)
      setQuery(null)
      setHits([])
      setSideMenuVisible(false)

      const prefix = SearchService.docRoot

      const processResult = (result) => {
        const hits = result.hits.map((r, i) => (
          <LazyLoad
            key={`search-hit-${i}`}
            height={'10rem'}
            scrollContainer={'#doc-content'}>
            <SearchResult
              url={[prefix, r.path].join('/')}
              title={r.title}
              description={r.description}
              terms={r.terms}
            />
          </LazyLoad>
        ))

        setQuery(result.query)
        setHits(hits)
      }

      SearchService.search(keyword)
        .then(processResult)
        .catch((reason) => {
          console.error(reason)
          setError(`Failed to perform search.`)
        })
        .finally(() => setSearching(false))

      e.preventDefault()
    },
    [keyword]
  )

  useEffect(() => {
    document.getElementById('doc-content').scrollTop = 0
  }, [content, query, error])

  const onInputChange = useCallback((e) => {
    setKeyword(e.target.value)
  }, [])

  const onToggleTOC = useCallback(() => {
    setSideMenuVisible(!sideMenuVisible)
  }, [sideMenuVisible])

  return (
    <div className={'h-full relative'}>
      <Switch>
        <Route path={`${url}/:path`}>
          <EmbedSphinx />
        </Route>
        <Route path={'/'}>
          <div className={'sphinx relative h-full flex items-stretch'}>
            <Button
              className={
                'absolute z-20 block md:hidden right-5 bottom-5 rounded-md'
              }>
              <SearchIcon
                className={`h-5 ${sideMenuVisible ? 'hidden' : 'block'}`}
                title={'Show table of contents for documentation'}
                onClick={onToggleTOC}
              />
              <ChevronDoubleLeftIcon
                className={`h-5 ${sideMenuVisible ? 'block' : 'hidden'}`}
                title={'Hide table of contents for documentation'}
                onClick={onToggleTOC}
              />
            </Button>
            <div
              className={
                'text-gray-800 dark:text-gray-100 bg-gray-300 dark:bg-gray-650 py-5 ' +
                'overflow-y-auto absolute bottom-0 top-0 md:static md:max-w-sm z-10 opacity-90 ' +
                'md:opacity-100 backdrop-blur-sm transition-width duration-300 ease-in-out ' +
                `${
                  sideMenuVisible
                    ? 'w-auto px-10 left-0 right-0'
                    : 'w-0 px-0 md:w-auto md:px-10'
                }`
              }>
              <div className={'flex items-center space-x-1 mb-2'}>
                <BookmarkIcon className={'h-5 text-sm'} />

                <Dropdown
                  label={
                    <button className={'text-sm font-bold'}>
                      {getTitle(url)}
                    </button>
                  }>
                  <MenuItem to={`/docs/latest/manual/index.html`}>
                    UPBGE 0.3 Manual
                  </MenuItem>
                  <MenuItem to={`/docs/latest/api/index.html`}>
                    UPBGE 0.3 API Reference
                  </MenuItem>
                  <MenuItem to={`/docs/v0.2.5/index.html`}>
                    UPBGE 0.2.5 Manual
                  </MenuItem>

                  <hr className={'dark:border-gray-800'} />

                  <MenuItem to={``} exact={true}>
                    Documentation Home
                  </MenuItem>
                </Dropdown>
              </div>

              <form
                className={'flex mb-3 justify-items-stretch'}
                onSubmit={onSearch}>
                <input
                  type='text'
                  name='keyword'
                  placeholder={'Search Docs'}
                  className={'flex-1 px-2 rounded-l-md text-gray-950'}
                  disabled={searching}
                  onChange={onInputChange}
                />
                <Button
                  className={'rounded-r-md'}
                  disabled={searching}
                  onClick={onSearch}>
                  <RefreshIcon
                    className={`animate-spin h-5 ${
                      searching ? 'block' : 'hidden'
                    }`}
                  />
                  <SearchIcon
                    className={`h-5 ${searching ? 'hidden' : 'block'}`}
                  />
                </Button>
              </form>

              {navigation}
            </div>
            <div id={'doc-content'} className={'flex-1 p-10 overflow-auto'}>
              {error && (
                <p className={'text-red-500 py-10 flex items-center'}>
                  <XCircleIcon className={'h-5 mr-1'} />
                  {error}
                </p>
              )}

              <div
                className={`flex flex-col items-center justify-center absolute  
                  left-0 right-0 top-2/4 -mt-14 ${
                    fetching ? 'block' : 'hidden'
                  }`}>
                <Spinner color={colors['upbge']} loading={fetching} size={80} />
              </div>

              {!query && content}

              {query && (
                <div>
                  <h1 className={'flex items-center space-x-2'}>
                    <div>Search Result for:</div>
                    <div className={'italic text-semibold'}>{query}</div>
                  </h1>

                  <p>
                    Search finished, found {hits.length} page(s) matching the
                    search query.
                  </p>
                  <hr />
                  {hits}
                </div>
              )}
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default EmbedSphinx
