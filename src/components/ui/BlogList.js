import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  <div>
    { 
      map(
        items,
        (item, id) => (
          <BlogItem key={id} item = {item} />
        )
      )
    }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array
};

export default BlogList;
