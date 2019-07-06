import React from 'react'
import { Link } from 'react-router-dom'

function Navigation({ items }) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <ul>
      {items.map(({ name, href }) => (
        <li>
          <Link to={href}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
