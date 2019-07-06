import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import pages from './pages'

import { Link } from './components'

function mapLinks({ name, to, children, exact }, index) {
  if (children) {
    return (
      <li key={index}>
        <Link exact={exact} to={to} text={name} />
        <ul className='sublist'>{children.map(mapLinks)}</ul>
      </li>
    )
  }
  return (
    <li key={index}>
      <Link exact={exact} to={to} text={name} />
    </li>
  )
}

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
        {/* <Navigation /> */}
        <div className='main-nav-wrapper'>
          <nav className='main-nav'>
            <ul className='list'>{pages.map(mapLinks)}</ul>
          </nav>
        </div>
        <main className='main-container'>
          <Switch>{pages.map(mapPages)}</Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
