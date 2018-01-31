import { connect } from 'react-redux';

import Index from 'components/views/Index';

import { fetchPosts } from 'actions/Posts';
import { fetchPages } from 'actions/Pages';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

const mapDispatchToProps = (dispatch) => ({
  search(searchText) {
    dispatch(fetchPosts(searchText, 0));
    dispatch(fetchPages(searchText));
  }
});

export default connect(stateToProps, mapDispatchToProps)(Index);
