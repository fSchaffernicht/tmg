import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

export default function Link({ text, ...rest }) {
  return (
    <RouterLink {...rest} className='link' activeClassName='active'>
      {text}
    </RouterLink>
  )
}
