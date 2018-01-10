import {stringify} from 'qs';

export const postsPath = (id = ':id') => `/posts/${id}`;
export const pagePath = (page = {page: 0}) => `/?${stringify(page)}`;
