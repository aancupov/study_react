import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

const Comments = ({ comments }) => (
  <div>
    { 
      map(
        comments,
        (comment) => (
          <div>  
            <p><b>{comment.author}:</b></p>
            {comment.text}
          </div>  
        )
      )
    }
  </div>
);

Comments.propTypes = {
  comments:  PropTypes.array
};

export default Comments;
