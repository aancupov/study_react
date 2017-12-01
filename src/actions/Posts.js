import request from 'superagent';

import * as types from 'constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get('http://localhost:3001/')
      .then((response) => {
        dispatch(receivePosts(response.body));
      })
      .catch(() => dispatch(errorPosts()));
  };
}
