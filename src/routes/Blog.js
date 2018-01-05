import React from 'react';
import  { Route } from  'react-router-dom';

import { postsPath } from 'helpers/routes';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchAllLikes } from 'actions/Likes';
import { fetchPages } from 'actions/Pages';

export default [
  <Route strict exact key='0' path='/' component={PostsContainer} 
    prepareData={(store, query) => { 
      store.dispatch(fetchPosts(
        (query.find === undefined) ? '' : query.find, 
        (query.page === undefined) ? 0 : Number(query.page) 
      )); 
      store.dispatch(fetchAllLikes());
      store.dispatch(
        fetchPages((query.find === undefined) ? '' : query.find)
      ); 
    }} 
  />,
  <Route key='1' path={postsPath()} component={PostContainer} 
    prepareData={ (store, query, params) => { 
      store.dispatch(fetchPost(params.id));
      store.dispatch(fetchAllLikes()); 
    }}
  />
];
