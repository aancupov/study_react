import { connect } from 'react-redux';

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

export default connect(stateToProps, mapDispatchToProps)(Likes);
