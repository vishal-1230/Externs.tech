import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import contact from './views/contact'
import Home from './views/home'
import Portfolio from './views/portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={contact} path='/contact' />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
