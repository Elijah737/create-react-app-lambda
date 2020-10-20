import React, { Component } from "react"
import routes from './routes'
import {HashRouter, Link} from 'react-router-dom'
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HashRouter>
          <div className="nav">
            <Link className="Link" to='/'>HOME</Link>
            <Link className="Link" to='/2'>22222</Link>
            <Link className="Link" to='/LD'>Lambda Demo</Link>
          </div>
          {routes}
          </HashRouter>
        </header>
      </div>
    )
  }
}

export default App
