import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import './index.css'

import App from './App'

const root = document.getElementById('root')

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  root
)
