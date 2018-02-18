//import {stringify} from 'qs';

export const postsPath = (id = ':id') => `/posts/${id}`;
export const pagePath = (page) => `/?page=${page}`;
export const contactsPath = () => '/contacts';
export const ccontactsPath = () => '/ccontacts';
export const postsPathEdit = (id = ':id') => `/posts/${id}/edit`;
