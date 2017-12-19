import { connect } from 'react-redux';
import {assign} from 'lodash';
import Likes from 'components/ui/Likes';
import { clickLikes } from 'actions/Likes';

const stateToProps = (state) => ({
  result: state.likes.result,
  isFetching: state.likes.isFetching,
  error: state.likes.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  click() {
    dispatch(clickLikes(ownProps.id));
  }
});

const mergeProps = (stateProps, actionProps, ownProps) => (
  assign({}, ownProps, stateProps, actionProps, {
    likes: Array.isArray(stateProps.result) 
      ? stateProps.result[ownProps.id].likes : 0
  })
);

export default connect(stateToProps, mapDispatchToProps, mergeProps)(Likes);
