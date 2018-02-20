import * as types from 'constants/actionTypes/CommentsActionTypes';

import { API_CALL } from 'middleware/API';

export function fetchComments(id) {
  return {
    [API_CALL]: {
      endpoint: `/comments/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_COMMENTS_REQUEST,
        types.FETCH_COMMENTS_SUCCESS,
        types.FETCH_COMMENTS_ERROR
      ]
    }
  };
}

export function addComment(id, values) {
  return {
    [API_CALL]: {
      endpoint: `/comments/${id}/add`,
      method: 'POST',
      query: values,
      types: [
        types.ADD_COMMENT_REQUEST,
        types.ADD_COMMENT_SUCCESS,
        types.ADD_COMMENT_ERROR
      ]
    }
  };
}
