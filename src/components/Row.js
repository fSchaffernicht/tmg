import React from 'react'
import PropTypes from 'prop-types'

function Row({ children }) {
  if (!children) {
    return null
  }

  return <div className='row'>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node
}

export default Row
