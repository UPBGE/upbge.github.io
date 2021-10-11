import { HashRouter, Link, Route, Switch } from 'react-router-dom'

import EmbedSphinx from '../docs/EmbedSphinx'
import SectionTitle from '../common/SectionTitle'
import '../docs/sphinx.css'

const Documentation = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={`/:path`}>
          <div
            className={
              'absolute top-0 bottom-0 left-0 right-0 pt-18 overflow-hidden'
            }>
            <EmbedSphinx />
          </div>
        </Route>
        <Route>
          <div className={'p-10'}>
            <SectionTitle>Documentation</SectionTitle>

            <ul className={'px-4 py-2'}>
              <li>
                <Link to={`/docs/latest/manual/index.html`}>
                  UPBGE 0.3 Manual
                </Link>
              </li>
              <li>
                <Link to={`/docs/latest/api/index.html`}>
                  UPBGE 0.3 API Reference
                </Link>
              </li>
              <li>
                <Link to={`/docs/v0.2.5/index.html`}>UPBGE 0.2.5 Manual</Link>
              </li>
            </ul>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Documentation
