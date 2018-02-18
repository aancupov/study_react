import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import posts from './Posts';
import post from './Post';
import likes from './Likes';

export default combineReducers({
  posts,
  post,
  likes,
  form: formReducer
});
