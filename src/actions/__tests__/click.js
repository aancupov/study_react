import { clickLikes } from 'actions/Likes';

import * as types from 'constants/actionTypes/LikesActionTypes';

import { API_CALL } from 'middleware/API';

describe('Post action creator', () => {
  it('should create an action to click like', () => {
    const expectedAction = {
      [API_CALL]: {
        endpoint: '/likepost/3',
        method: 'PUT',
        query: {},
        types: [
          types.CLICK_LIKE_REQUEST,
          types.CLICK_LIKE_SUCCESS,
          types.CLICK_LIKE_ERROR
        ]
      }
    };
    expect(clickLikes(3)).toEqual(expectedAction);
  });
});