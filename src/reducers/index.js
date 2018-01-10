import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import likes from './Likes';
import pages from './Pages';

export default combineReducers({
  posts,
  post,
  likes,
  pages
});
