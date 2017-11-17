//Внутренняя компонента для поста

import React from 'react';

import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import items from 'components/data/items';


const Post = ({match}) => (
  <Item.Group>
    <BlogItem item={items[match.params.id]}/>
  </Item.Group>
);

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
