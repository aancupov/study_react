import React from 'react';

import { map } from 'lodash';

import { Field } from 'redux-form';

import renderField from 'components/ui/Field';

import PropTypes from 'prop-types';

const Comments = ({ comments, handleSubmit }) => (
  <div><b>Comments:</b>
    { 
      map(
        comments,
        (comment, index) => (
          <div key={index}>
            <b>{comment.author}:</b><br/> 
            {comment.text}
          </div>
        )
      )
    }
    <div>
      <b>Add comment:</b>
      <form onSubmit={handleSubmit} className="ui form" >
        <Field
          label="Message" 
          component={renderField} 
          type="text" 
          name="text" 
        />
        <Field 
          label="Author"
          component={renderField} 
          type="text" 
          name="author" 
        />
        <input type="submit" className="ui button primary" value="update" />
      </form>  
    </div>    
  </div>
); 

Comments.propTypes = {
  comments:  PropTypes.array,
  handleSubmit: PropTypes.func
};

export default Comments;
