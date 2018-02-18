import React from 'react';

import { connect } from 'react-redux';

import { Field, reduxForm, SubmissionError } from 'redux-form';

import classNames from 'classnames';

import { updatePost } from 'actions/Post';

//import flowRight from 'lodash';

const validate = (values) => {
  const errors = {};

  if (values.message.length < 5)
    errors.message = 'Длина сообщения меньше 5';
    
  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (values.message.length < 10 && values.message.length >= 5)
    warnings.message = 'Короткое сообщение';
    
  return warnings;
};

const renderField = ({ input, label, type, 
  meta: { touched, error, warning } }) => (
  <div className={ classNames('ui field', { error }) } >
    <label>{label}</label>
    <input className="ui input" {...input} type={type} />
    { touched && (error && (
      <div className="ui red label">{error}</div>
    )) || (warning && (
        <div className="ui yellow label">{warning}</div>
      ))
    }
  </div>
);

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

export default connect (
  (state) => ({
    initialValues: {
      id: state.post.entry.id,
      message: state.post.entry.message,
      updatedAt: state.post.entry.metainfo.updatedAt,
      author: state.post.entry.metainfo.author
    }  
  })
  // ,
  // (dispatch) => ({
  //   updatePost: flowRight(dispatch, updatePost)
  // })
) (reduxForm({ 
  form: 'editPost',
  validate,
  warn,
  onSubmit: (values, dispatch) => (
    dispatch(updatePost(values)).then(history.back())
  )
})(EditPostView));
