import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';
import items from '../data/items';


class BlogContainer extends React.Component {
  render() {
    return React.createElement(BlogList, { items });
  }
}

export default BlogContainer;
