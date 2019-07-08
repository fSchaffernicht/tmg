import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import pages from './pages'

import { Navigation } from './components'

function mapPages({ name, to, children, Component, exact }, index) {
  if (children) {
    return children.map(mapPages)
  }

  return <Route exact={exact} key={index} path={to} component={Component} />
}

function App() {
  return (
    <Router>
      <div className='main-wrapper'>
        <Navigation items={pages} />
        <main className='main-container'>
          <div className='container'>
            <Switch>{pages.map(mapPages)}</Switch>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
