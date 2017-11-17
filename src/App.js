import React from 'react';

import BlogContainer from './components/containers/BlogContainer';

import MainLayout from 'components/layouts/MainLayout';

import  {
  Router,
  Route,
  Link
} from  'react-router-dom';

import { postsPath } from 'helpers/routes';

import Post from 'components/Post.js';

import history from 'helpers/history.js';

const App = () => (
  <Router history={history}>
    <MainLayout>
        <Route exact path='/' component={BlogContainer}/>
        <Route path={postsPath()} component={Post}/>
    </MainLayout>
  </Router>
);

export default App;
