import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';
import Search from './Search';

import PagesContainer from 'containers/PagesContainer';

const BlogList = ({ items, search }) => (
  <div>
    <Search search={search}/>
    { 
      map(
        items,
        (item, id) => (
          <BlogItem key={id} item={item} />
        )
      )
    }
    <PagesContainer />
  </div>
);

BlogList.propTypes = {
  items:  PropTypes.array,
  search: PropTypes.func
};

export default BlogList;
