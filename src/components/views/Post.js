//Внутренняя компонента для поста

import React from 'react';

import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import CommentsContainer from 'containers/CommentsContainer';

import { editPostPath } from 'helpers/routes';

import { Link } from 'react-router-dom';

const Post = ({ item }) => (
  <div>
    <Item.Group>
      {item && <BlogItem item={item} /> }
      {item && <Link to={editPostPath(item.id)}>Edit</Link>}
      {item && <CommentsContainer id={item.id}/>} 
    </Item.Group>
    {item && <Helmet title={item.message} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
