import * as types from 'constants/actionTypes/LikesActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchAllLikes() {
  return {
    [API_CALL]: {
      endpoint: '/likes',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_ALL_LIKES_REQUEST,
        types.FETCH_ALL_LIKES_SUCCESS,
        types.FETCH_ALL_LIKES_ERROR
      ]
    }
  };
}

export function clickLikes(id) {
  return {
    [API_CALL]: {
      endpoint: `/likepost/${id}`,
      method: 'PUT',
      query: {},
      types: [
        types.CLICK_LIKE_REQUEST,
        types.CLICK_LIKE_SUCCESS,
        types.CLICK_LIKE_ERROR
      ]
    }
  };
}
