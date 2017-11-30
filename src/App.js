import React from 'react';

import BlogContainer from 'components/containers/BlogContainer';

import MainLayout from 'components/layouts/MainLayout';

import  {
  Router,
  Route,
  Link
} from  'react-router-dom';

import routes from 'routes';

import { postsPath } from 'helpers/routes';

import Post from 'components/Post.js';

import history from 'helpers/history.js';

const App = () => (
  <Router history={history}>
    <MainLayout>{routes.childRoutes}</MainLayout>
  </Router>
);

export default App;
