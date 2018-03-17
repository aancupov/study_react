import React from 'react';

import PropTypes from 'prop-types';

const Likes = ({ likes, click, error }) => (
  <div>
    { error ? (
      <div> Likes: error </div>
    ) : (
      <div className='str-likes'> Likes: {likes} </div>
    )}
    <button onClick={click} className='btn-like'>Like</button>
  </div>
); 

Likes.propTypes = {
  likes:  PropTypes.number,
  click:  PropTypes.func,
  error:  PropTypes.bool
};

export default Likes;
