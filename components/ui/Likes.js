import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
//import _ from 'lodash';
//import moment from 'moment'

///////////////////////////////////////////////////    Likes
class Likes extends React.Component {
  constructor(props) {
    super(props);

    //this.handleClick = _.bind(this.handleClick, this);
    const { likes } = props;
    this.state = {
      likes: likes
    }  
  }

  handleClick() {
    this.setState({likes: ++this.state.likes});
    console.log('clicked');
  }
  
  render() {
    return (
      DOM.div(
        null
        , `Likes: ${ this.state.likes }`
        , DOM.button(
          { onClick: () => this.handleClick() }
          ,'Like'
        )
      )
    )
  }
}

export default Likes;
