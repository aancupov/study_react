import React from 'react';

import _ from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  <div>
    { 
      _.map(
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
