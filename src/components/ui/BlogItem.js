import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Message from './Message';
import MetaInfo from './MetaInfo';
import Likes from './Likes';
import 'css/app.css';
import { Link } from 'react-router-dom';
import { postsPath } from 'helpers/routes';

const BlogItem = ({ item, like }) => (
  <div className='blog-item'>
    <Image { ...item.image } />
    <Message><Link to={postsPath(item.id)}>{ item.message }</Link></Message>
    <MetaInfo { ... item.metainfo } />
    <Likes item = {item} like = {like} />
  </div>
);

BlogItem.propTypes = {
  item: PropTypes.shape({ 
    message: Message.PropTypes, 
    metainfo: MetaInfo.PropTypes,
    image: Image.PropTypes,
    like: Likes.PropTypes 
  }),
  message: PropTypes.shape({ text: PropTypes.string }),
  image: PropTypes.shape(Image.PropTypes),
  like: PropTypes.func
};

export default BlogItem;