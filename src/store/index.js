import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

const store = createStore(
  reducers, 
  applyMiddleware(APIMiddleware)
);

export default store;
