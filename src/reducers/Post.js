import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  isUpdating: false,
  isAdding: false,
  error: false,
  entry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case types.UPDATE_POST_REQUEST:
      return assign({}, state, { isUpdating: true });
    case types.UPDATE_POST_ERROR:
      return assign({}, state, { error: true });
    case types.UPDATE_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case types.ADD_POST_REQUEST:
      return assign({}, state, { isAdding: true });
    case types.ADD_POST_ERROR:
      return assign({}, state, { error: true });
    case types.ADD_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    default:
      return state;
  }
}
