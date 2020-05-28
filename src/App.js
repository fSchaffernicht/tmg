import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import pages from './pages'

import { Navigation } from './components'

import { useFetch } from './hooks'

function mapPages({ name, to, children, Component, exact }, index) {
  if (children) {
    return children.map(mapPages)
  }

  return <Route exact={exact} key={index} path={to} component={Component} />
}

function App() {
  const { data, error } = useFetch(
    'http://localhost:4000/api/isServiceAvailable'
  )
  return (
    <Router>
      <div className='main-wrapper'>
        <Navigation items={pages} />
        <main className='main-container'>
          <div className='container'>
            {JSON.stringify(data, null, 2)}
            {JSON.stringify(error, null, 2)}
            <Switch>{pages.map(mapPages)}</Switch>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
