import React, { useState, useRef } from 'react'
import classNames from 'classnames'

import { Link, Icon } from './'

import { useKeys } from '../hooks'

function Navigation({ items, ...rest }) {
  const [isOpen, setIsOpen] = useState(false)

  useKeys(key => {
    if (isOpen) {
      if (key === 'Escape') {
        setIsOpen(false)
      }
    }
  }, isOpen)

  if (!items || items.length === 0) {
    return null
  }

  function toggleNav() {
    setIsOpen(!isOpen)
  }

  const classes = classNames('main-navigation-container', {
    'slide-in': isOpen
  })

  return (
    <div className='main-navigation-wrapper'>
      <div onClick={() => setIsOpen(true)}>
        <Icon name='menu' />
      </div>
      <div className={classes}>
        <div onClick={() => setIsOpen(false)}>
          <Icon name='cross' />
        </div>
        <nav className='main-navigation'>
          <ul className='main-navigation-list'>
            {items.map(mapLinks(toggleNav))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

function mapLinks(callback) {
  return function({ name, to, children, exact }, index) {
    if (name === 'Admin') {
      return null
    }
    if (children) {
      return (
        <li key={index}>
          <Link onClick={callback} exact={exact} to={to} text={name} />
          <ul className='sublist'>{children.map(mapLinks)}</ul>
        </li>
      )
    }
    return (
      <li key={index}>
        <Link onClick={callback} exact={exact} to={to} text={name} />
      </li>
    )
  }
}

export default Navigation
