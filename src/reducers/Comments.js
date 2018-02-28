import { assign } from 'lodash';

import * as types from 'constants/actionTypes/CommentsActionTypes';

const initialState = {
  isFetching: false,
  isAdding:   false,
  error:      false,
  result:     null,
  errors:     []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_COMMENTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_COMMENTS_SUCCESS:
      return assign({}, state, { result: action.response });  
    case types.ADD_COMMENT_REQUEST:
      return assign({}, state, { isAdding: true });
    case types.ADD_COMMENT_ERROR:
      return assign({}, state, { error: true });
    case types.ADD_COMMENT_SUCCESS:
      return assign({}, state, { result: action.response.commentsOfPost, 
        errors: action.response.errors });  
    default:
      return state;
  }
}
