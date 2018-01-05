import { connect } from 'react-redux';

import BlogList from 'components/ui/BlogList';

import { fetchPosts } from 'actions/Posts';
import { fetchPages } from 'actions/Pages';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
  find(text) {
    dispatch(fetchPosts(text.target.value, 0));
    dispatch(fetchPages(text.target.value));
  }
});

export default connect(stateToProps, mapDispatchToProps)(BlogList);
