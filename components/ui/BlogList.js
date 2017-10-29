import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item, key) => (
        DOM.li({ key }, React.createElement(BlogItem, item ))
      )
    )
  )
)

export default BlogList;