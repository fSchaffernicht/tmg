import React from 'react'
import PropTypes from 'prop-types'

function Container({ children }) {
  if (!children) {
    return null
  }

  return <div className='container'>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
