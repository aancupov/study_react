//import {stringify} from 'qs';

export const postPath = (id = ':id') => `/posts/${id}`;
export const editPostPath = (id = ':id') => `/posts/${id}/edit`;
export const addPostPath = () => '/post/new';
export const pagePath = (page) => `/?page=${page}`;
export const contactsRefPath = () => '/contacts-ref';
export const contactsPath = () => '/contacts';
