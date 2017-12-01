//Внутренняя компонента для поста

import React from 'react';

import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import request from 'superagent';


const Post = ({ item }) => (
  <Item.Group>
    { item && <BlogItem item={item}/> }
  </Item.Group>
);

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
