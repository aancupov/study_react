import * as types from 'constants/actionTypes/PostsActionTypes';

import { API_CALL } from 'middleware/API';

import {perpage} from 'constants/perpage';

export function fetchPosts(search = '', page = 0) {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {search, page, perpage},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
