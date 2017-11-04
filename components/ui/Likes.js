import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

class Likes extends React.Component { 
  handleOnClick() {
    this.props.like(this.props.item.id)  
  }
  
  render() {
    return (
      DOM.div(
        null
        , `Likes: ${this.props.item.metainfo.likes}`
        , DOM.button(
          { onClick: this.handleOnClick.bind(this) }
          ,'Like'
        )
      )
    )
  }
}

export default Likes;
