import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Team from './views/team'
import Contact from './views/contact'
import InstagramandTeam from './views/instagramand-team'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Team} path="/team" />
        <Route exact component={Contact} path="/contact" />
        <Route exact component={InstagramandTeam} path="/instagramand-team" />
        <Route exact component={Home} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
