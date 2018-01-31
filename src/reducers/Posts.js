import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  pagination: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, { 
        entries: action.response.items, 
        pagination: action.response.pagination 
      });  
    default:
      return state;
  }
}
