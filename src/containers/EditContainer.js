import { connect } from 'react-redux';

import { updatePost } from 'actions/Post';

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
  (state) => ({
    initialValues: {
      id: state.post.entry.id,
      message: state.post.entry.message,
      updatedAt: state.post.entry.metainfo.updatedAt,
      author: state.post.entry.metainfo.author
    }  
  })
) (reduxForm({ 
  form: 'editPost',
  validate,
  warn,
  onSubmit: (values, dispatch) => (
    dispatch(updatePost(values)).then(history.back())
  )
})(EditPostView));
