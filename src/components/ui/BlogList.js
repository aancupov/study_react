import React from 'react';

import _ from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ items, like }) => (
  <div>
    { 
      _.map(
        items,
        (item, id) => (
          <BlogItem key={id} item = {item} like = {like} />
        )
      )
    }
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array,
  like: PropTypes.func
};

export default BlogList;
