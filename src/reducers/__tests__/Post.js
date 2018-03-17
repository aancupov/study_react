import postReducer from 'reducers/Post';
import * as types from 'constants/actionTypes/PostActionTypes';


describe('posts reducer', () => {
  const initialState = {
    isFetching: false,
    isUpdating: false,
    isAdding: false,
    error: false,
    entry: null
  };
    
  it('should handle FETCH_POST_REQUEST', () => {
    expect(
      postReducer(initialState, {
        type: types.FETCH_POST_REQUEST,
      })
    ).toEqual(
      {
        isFetching: true,
        isUpdating: false,
        isAdding: false,
        error: false,
        entry: null
      }
    );
  });

  it('should handle ADD_POST_REQUEST', () => {
    expect(
      postReducer(initialState, {
        type: types.ADD_POST_REQUEST,
      })
    ).toEqual(
      {
        isFetching: false,
        isUpdating: false,
        isAdding: true,
        error: false,
        entry: null
      }
    );
  });
});