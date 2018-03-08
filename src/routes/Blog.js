import React from 'react';
import  { Route } from  'react-router-dom';

import { postPath, editPostPath, addPostPath, contactsRefPath, contactsPath } 
  from 'helpers/routes';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import ContactsRef from 'components/views/ContactsRef';
import Contacts from 'components/views/Contacts';
import EditContainer from 'containers/EditContainer';
import AddContainer from 'containers/AddContainer';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchAllLikes } from 'actions/Likes';
import { fetchComments } from 'actions/Comments';

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
  <Route key='1' path={addPostPath()} component={AddContainer} />,
  <Route strict exact key='2' path={postPath()} component={PostContainer} 
    prepareData={(store, query, params) => (
      Promise.all([
        store.dispatch(fetchPost(params.id)),
        store.dispatch(fetchComments(params.id)),
        store.dispatch(fetchAllLikes())
      ])
    )}
  />,
  <Route key='3' path={contactsRefPath()} component={ContactsRef} 
  />,
  <Route key='4' path={contactsPath()} component={Contacts} 
  />,
  <Route key='5' path={editPostPath()} component={EditContainer}
    prepareData={(store, query, params) => (
      store.dispatch(fetchPost(params.id))
    )}
  />
];
