import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ items, like }) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item, id) => (
        DOM.li({ key: id }, React.createElement(BlogItem, { item, like } ))
      )
    )
  )
);

export default BlogList;