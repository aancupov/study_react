import { assign } from 'lodash';

import * as types from 'constants/actionTypes/LikesActionTypes';

const initialState = {
  isFetching:   false,
  error:        false,
  resultLikes:  null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ALL_LIKES_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_ALL_LIKES_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_ALL_LIKES_SUCCESS:
      return assign({}, state, { resultLikes: action.response });  
    case types.CLICK_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.CLICK_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.CLICK_LIKE_SUCCESS:
      return assign({}, state, { resultLikes: action.response });  
    default:
      return state;
  }
}
