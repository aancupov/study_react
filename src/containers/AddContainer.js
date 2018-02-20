import { connect } from 'react-redux';

import { addPost } from 'actions/Post';

import { reduxForm } from 'redux-form';

import EditPostView from 'components/views/Edit';

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

export default connect (
  () => ({
    initialValues: {
      message: '',
      updatedAt: '',
      author: ''
    }  
  })
) (reduxForm({ 
  form: 'editPost',
  validate,
  warn,
  onSubmit: (values, dispatch) => (
    dispatch(addPost(values)).then(history.back())
  )
})(EditPostView));
