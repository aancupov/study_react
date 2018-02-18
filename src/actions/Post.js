import * as types from 'constants/actionTypes/PostActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}

export function updatePost(values) {
  return {
    [API_CALL]: {
      endpoint: `/posts/${values.id}/edit`,
      method: 'PUT',
      query: values,
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}

export function addPost(values) {
  return {
    [API_CALL]: {
      endpoint: '/posts/add',
      method: 'POST',
      query: values,
      types: [
        types.ADD_POST_REQUEST,
        types.ADD_POST_SUCCESS,
        types.ADD_POST_ERROR
      ]
    }
  };
}
