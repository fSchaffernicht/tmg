import React, { useState } from 'react'
import { Link, Icon } from './'

function Navigation({ items }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Icon name='menu' />
      </div>
      <div
        className={
          isOpen
            ? 'main-navigation-wrapper slide-in'
            : 'main-navigation-wrapper'
        }
      >
        <nav className='main-navigation'>
          <ul className='main-navigation-list'>{items.map(mapLinks)}</ul>
        </nav>
      </div>
    </div>
  )
}

function mapLinks({ name, to, children, exact }, index) {
  if (name === 'Admin') {
    return null
  }
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

export default Navigation
