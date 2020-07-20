import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'

const styles = {
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
}

const UnorderedList = memo(
  forwardRef((props, ref) => {
    const { children, size = 400, icon, ...rest } = props

    const enrichedChildren = React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child
      }

      return React.cloneElement(child, {
        icon,
        size,
        // Prefer more granularly defined props if present
        ...child.props
      })
    })

    return (
      <Box is="ul" {...styles} {...rest} ref={ref}>
        {enrichedChildren}
      </Box>
    )
  })
)

UnorderedList.propTypes = {
  ...Box.propTypes,

  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]),

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.node
}

export default UnorderedList
