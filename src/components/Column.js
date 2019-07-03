import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function mapSizes(size) {
  const columns = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve'
  ]

  return columns.find((column, index) => {
    return size === index + 1
  })
}

function Column({ children, size, ...rest }) {
  const classes = classnames(mapSizes(size), 'columns')

  if (!children) {
    return null
  }

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node
}

export default Column
