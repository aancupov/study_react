import { postsPath } from 'helpers/routes';

import BlogContainer from 'components/containers/BlogContainer';
import Post     from 'components/Post';

import React from 'react';

import  { Route } from  'react-router-dom';

const Index = {
  exact: true,
  path: '/',
  component: BlogContainer
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default [
  <Route strict exact key='0' path='/' component={BlogContainer} />,
  <Route key='1' path={postsPath()} component={Post} />
];
