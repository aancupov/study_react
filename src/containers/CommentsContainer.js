import { connect } from 'react-redux';

import { reset, reduxForm, SubmissionError } from 'redux-form';

import Comments from 'components/ui/Comments';

import { addComment } from 'actions/Comments';

const stateToProps = (state) => ({
  comments: state.comments.result,
  isFetching: state.comments.isFetching,
  error: state.comments.error,
  errors: state.errors
});

export default connect(stateToProps) (
  reduxForm({ 
    form: 'addComment',
    onSubmit: (values, dispatch, props) => (
      dispatch(addComment(props.id,values))
        .then(dispatch(reset('addComment')))
        .then((response) => {
          response.errors.forEach((item) => {
            throw new SubmissionError(item);
          });
        })
    )
  }
  )(Comments)
);
