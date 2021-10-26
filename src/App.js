import { Route, Switch } from 'react-router-dom'

import { useDarkModeChange } from './common/theme'
import Header from './common/Header'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Community from './pages/Community'
import Download from './pages/Download'

const App = () => {
  const darkMode = useDarkModeChange()

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
      <div
        className={
          'min-h-screen text-gray-600 dark:bg-gray-930 dark:text-gray-150 transition-colors ' +
          'duration-500 ease-in-out leading-7'
        }>
        <Header />
        <main>
          <Switch>
            <Route path='/documentation'>
              <Documentation />
            </Route>
            <Route path='/community'>
              <Community />
            </Route>
            <Route path='/download'>
              <Download />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default App
