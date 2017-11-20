import React from 'react';

import PropTypes from 'prop-types';

import Message from './Message';

import MetaInfo from './MetaInfo';

class Likes extends React.Component { 
  handleOnClick() {
    this.props.like(this.props.item.id);  
  }
  
  render() {
    return (
      <div>
        Likes: {this.props.item.metainfo.likes}
        <button onClick={this.handleOnClick.bind(this)}>
          Like
        </button>  
      </div>
    );
  }
}

Likes.propTypes = {
  item: PropTypes.shape({ 
    id: PropTypes.numeric,
    message: Message.PropTypes, 
    metainfo: MetaInfo.PropTypes,
    image: Image.PropTypes,
    like: Likes.PropTypes 
  }),
  like: PropTypes.func
};

export default Likes;
