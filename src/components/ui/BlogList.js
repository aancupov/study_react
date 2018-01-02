import React from 'react';

import { map } from 'lodash';

import PropTypes from 'prop-types';

import BlogItem from './BlogItem';

import PagesContainer from 'containers/PagesContainer';

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
    <PagesContainer />
  </div>
);

BlogList.propTypes = {
  items: PropTypes.array
};

export default BlogList;
