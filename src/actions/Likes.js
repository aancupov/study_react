import request from 'superagent';

import * as types from 'constants/actionTypes/LikesActionTypes';

import { HOST } from 'constants/host';

const requestAllLikes = () => ({
  type: types.FETCH_ALL_LIKES_REQUEST
});

const errorAllLikes = () => ({
  type: types.FETCH_ALL_LIKES_ERROR
});

const receiveAllLikes = (response) => ({
  type: types.FETCH_ALL_LIKES_SUCCESS,
  response
});

export function fetchAllLikes() {
  return (dispatch) => {
    dispatch(requestAllLikes());

    return request
      .get(`${HOST}/likes`)
      .end((err, response) => {
        err ? dispatch(errorAllLikes()) 
          : dispatch(receiveAllLikes(response.body));
      });
  };
}

const requestClick = (id) => ({
  type: types.CLICK_LIKE_REQUEST,
  id
});

const errorClick = () => ({
  type: types.CLICK_LIKE_ERROR
});

const sendClick = (response) => ({
  type: types.CLICK_LIKE_SUCCESS,
  response
});

export function clickLikes(id) {
  return (dispatch) => {
    dispatch(requestClick(id));

    return request
      .put(`${HOST}/likepost/${id}`)
      .end((err, response) => {
        err ? dispatch(errorClick()) : dispatch(sendClick(response.body));
      });
  };
}
