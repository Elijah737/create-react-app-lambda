import React, { Component } from "react"
import routes from './routes'
import {HashRouter, Link} from 'react-router-dom'
import "./App.css"
import "./nav.css"

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <HashRouter>
          <div className="nav">
            <Link className="Link" to='/'>Resume</Link>
            <Link className="Link" to='/2'>Contact</Link>
            <Link className="Link" to='/blog'>Blog</Link>
          </div>
          {routes}
          </HashRouter>
        </header>
      </div>
    )
  }
}

export default App
