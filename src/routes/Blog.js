import React from 'react';
import  { Route } from  'react-router-dom';

import { postsPath } from 'helpers/routes';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import store from 'store';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

export default [
  <Route strict exact key='0' path='/' component={PostsContainer} 
    prepareData={(store) => { store.dispatch(fetchPosts()); }} 
  />,
  <Route key='1' path={postsPath()} component={PostContainer} 
    prepareData={ (store, query, params) => { store.dispatch(fetchPost(params.id)); }}
  />
];
