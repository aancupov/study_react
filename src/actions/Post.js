import request from 'superagent';

import * as types from 'constants/actionTypes/PostActionTypes';

import { HOST } from 'constants/host';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request
      .get(HOST + `/posts/${id}`)
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
  };
}