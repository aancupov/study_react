import { assign } from 'lodash';

import * as types from 'constants/actionTypes/CommentsActionTypes';

const initialState = {
  id:         -1,
  isFetching: false,
  error:      false,
  result:     null
};

export default function(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_COMMENTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_COMMENTS_SUCCESS:
      return assign({}, state, { result: action.response });  
    default:
      return state;
  }
}
