import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const store = (initialState) => createStore(
  reducers, 
  initialState,
  applyMiddleware(APIMiddleware)
);

export default store;
