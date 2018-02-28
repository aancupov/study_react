import React from 'react';

import { Field } from 'redux-form';

import renderField from 'components/ui/Field';

import PropTypes from 'prop-types';

const EditPostView = ({ handleSubmit, pristine, submitting, reset }) => (
  <div>
    <h1>Edit Post</h1>
    <form onSubmit={handleSubmit} className="ui form" >
      <Field
        label="Message" 
        component={renderField} 
        type="text" 
        name="message" 
      />
      <Field 
        label="Author"
        component={renderField} 
        type="text" 
        name="author" 
      />
      <Field
        label="Updated at" 
        component={renderField} 
        type="text" 
        name="updatedAt" 
      />
      { (!pristine && !submitting) && 
      <button className="ui button" onClick={reset}>
        Cancel
      </button> }
      <input type="submit" className="ui button primary" value="update" />
    </form>  
  </div>    
);

EditPostView.propTypes = {
  handleSubmit: PropTypes.func,
  pristine:     PropTypes.bool,
  submitting:   PropTypes.bool,
  reset:        PropTypes.func
};

export default EditPostView;