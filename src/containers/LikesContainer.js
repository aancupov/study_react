import { connect } from 'react-redux';
import {assign} from 'lodash';
import Likes from 'components/ui/Likes';
import { clickLikes } from 'actions/Likes';

const stateToProps = (state) => ({
  resultLikes: state.likes.resultLikes,
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
    likes: Array.isArray(stateProps.resultLikes) 
    && ownProps.id < stateProps.resultLikes.length
      ? stateProps.resultLikes[ownProps.id].likes : 0
  })
);

export default connect(stateToProps, mapDispatchToProps, mergeProps)(Likes);
