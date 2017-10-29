import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

class Likes extends React.Component {
  constructor(props) {
    super(props);

    //this.handleClick = _.bind(this.handleClick, this);
    const { likes } = props;
    this.state = {
      likes: likes
    }  
  }

  handleClick(e) {
    this.setState({likes: ++this.state.likes});
  }
  
  render() {
    return (
      DOM.div(
        null
        , `Likes: ${ this.state.likes }`
        , DOM.button(
          { onClick: (e) => this.handleClick(e) }
          ,'Like'
        )
      )
    )
  }
}

export default Likes;
