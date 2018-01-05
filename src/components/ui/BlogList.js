import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';
import Find from './Find';

import PagesContainer from 'containers/PagesContainer';

const BlogList = ({ items, find }) => (
  <div>
    <Find find={find}/>
    { 
      map(
        items,
        (item, id) => (
          <BlogItem key={id} item = {item} />
        )
      )
    }
    <PagesContainer />
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array,
  find:  PropTypes.func
};

export default BlogList;
