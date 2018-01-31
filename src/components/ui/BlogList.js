import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';
import Search from './Search';

import Pages from './Pages';

const BlogList = ({ items, search, pagination }) => (
  <div>
    <Search search={search}/>
    { 
      map(
        items,
        (item, id) => (
          <BlogItem key={id} item={item}/>
        )
      )
    }
    <Pages pagination={pagination}/>  
  </div>
);

BlogList.propTypes = {
  items:  PropTypes.array,
  search: PropTypes.func,
  pagination: PropTypes.number
};

export default BlogList;
