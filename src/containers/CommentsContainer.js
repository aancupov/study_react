import { connect } from 'react-redux';

import { reset, reduxForm } from 'redux-form';

import Comments from 'components/ui/Comments';

import { addComment, fetchComments } from 'actions/Comments';

const stateToProps = (state) => ({
  comments: state.comments.result,
  isFetching: state.comments.isFetching,
  error: state.comments.error
});

export default connect(stateToProps) (
  reduxForm({ 
    form: 'addComment',
    //validate,
    //warn,
    onSubmit: (values, dispatch, props) => (
      dispatch(addComment(props.id,values))
        .then(dispatch(fetchComments(props.id)))
        .then(dispatch(reset('addComment')))
    )
  }
  )(Comments)
);
