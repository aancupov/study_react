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
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_PAGES_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_PAGES_SUCCESS:
      return assign({}, initialState, { result: action.response });  
    default:
      return state;
  }
}
