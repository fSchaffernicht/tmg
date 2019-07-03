import React from 'react'
import PropTypes from 'prop-types'

import Row from './Row'
import Column from './Column'

function Grid({ children }) {
  if (!children) {
    return null
  }

  const count = React.Children.count(children)

  return (
    <Row>
      {React.Children.map(children, (child, index) => {
        return <Column size={Math.round(12 / count)}>{child}</Column>
      })}
    </Row>
  )
}

Grid.propTypes = {
  children: PropTypes.node
}

export default Grid
