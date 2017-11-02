import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

class Likes extends React.Component { 
  handleOnClick() {
    this.props.like(this.props.id)  
  }
  
  render() {
    return (
      DOM.div(
        null
        , `Likes: ${ this.props.nlikes[this.props.id] }`
        , DOM.button(
          { onClick: this.handleOnClick.bind(this) }
          ,'Like'
        )
      )
    )
  }
}

export default Likes;
