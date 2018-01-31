import { connect } from 'react-redux';

import Index from 'components/views/Index';

import { fetchPosts } from 'actions/Posts';

const stateToProps = (state) => (
  {
    items: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error,
    pagination: state.posts.pagination
  }
);

const mapDispatchToProps = (dispatch) => ({
  search(searchText) {
    dispatch(fetchPosts(searchText, 0));
  }
});

export default connect(stateToProps, mapDispatchToProps)(Index);
