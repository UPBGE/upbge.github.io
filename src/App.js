import { Route, Switch } from 'react-router-dom'

import Header from './common/Header'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Releases from './pages/Releases'

const App = () => {
  return (
    <div className={'text-gray-600 leading-7'}>
      <Header />
      <main>
        <Switch>
          <Route path='/documentation'>
            <Documentation />
          </Route>
          <Route path='/community'>
            <Community />
          </Route>
          <Route path='/releases'>
            <Releases />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
