//Внутренняя компонента для поста

import React from 'react';

import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import { postsPathEdit } from 'helpers/routes';

import { Link } from 'react-router-dom';

const Post = ({ item }) => (
  <div>
    <Item.Group>
      {item && <BlogItem item={item} /> }
      {item && <Link to={postsPathEdit(item.id)}>Edit</Link>}
    </Item.Group>
    {item && <Helmet title={item.message} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
