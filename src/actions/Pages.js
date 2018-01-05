import * as types from 'constants/actionTypes/PagesActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPages(find = '') {
  return {
    [API_CALL]: {
      endpoint: '/pages',
      method: 'GET',
      query: {find:`${find}`},
      types: [
        types.FETCH_PAGES_REQUEST,
        types.FETCH_PAGES_SUCCESS,
        types.FETCH_PAGES_ERROR
      ]
    }
  };
}
