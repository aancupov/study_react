import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PagesActionTypes';

const initialState = {
  isFetching: false,
  error:      false,
  result:     null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PAGES_REQUEST:
      //console.log(action, state);
      return assign({}, state, { isFetching: true });
    case types.FETCH_PAGES_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_PAGES_SUCCESS:
      return assign({}, state, { result: action.response });  
    default:
      return state;
  }
}
