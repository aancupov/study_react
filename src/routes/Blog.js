import React from 'react';
import  { Route } from  'react-router-dom';

import { postsPath, postsPathEdit, postsPathAdd } from 'helpers/routes';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import Contacts from 'components/views/Contacts';
import Ccontacts from 'components/views/Ccontacts';
import EditContainer from 'containers/EditContainer';
import AddContainer from 'containers/AddContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchAllLikes } from 'actions/Likes';

export default [
  <Route strict exact key='0' path='/' component={PostsContainer} 
    prepareData={(store, query) => (       
      Promise.all([
        store.dispatch(fetchPosts(
          (query.search === undefined) ? '' : query.search, 
          (query.page === undefined) ? 0 : Number(query.page) 
        )), 
        store.dispatch(fetchAllLikes())
      ])
    )} 
  />,
  <Route strict exact key='1' path={postsPath()} component={PostContainer} 
    prepareData={(store, query, params) => (
      Promise.all([
        store.dispatch(fetchPost(params.id)),
        store.dispatch(fetchAllLikes())
      ])
    )}
  />,
  <Route key='2' path='/contacts' component={Contacts} 
  />,
  <Route key='3' path='/ccontacts' component={Ccontacts} 
  />,
  <Route key='4' path={postsPathEdit()} component={EditContainer}
    prepareData={(store, query, params) => (
      store.dispatch(fetchPost(params.id))
    )}
  />,
  <Route key='5' path={postsPathAdd()} component={AddContainer} />  
];
