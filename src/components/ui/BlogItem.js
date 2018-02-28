import React from 'react';

import PropTypes from 'prop-types';

import Image from './Image';
import Message from './Message';
import MetaInfo from './MetaInfo';
import LikesContainer from 'containers/LikesContainer';

import 'css/app.css';

import { Link } from 'react-router-dom';

import { postPath } from 'helpers/routes';

const BlogItem = ({ item }) => (
  <div className='blog-item'>
    <Image {...item.image } />
    <Message><Link to={postPath(item.id)}>{ item.message }</Link></Message>
    <MetaInfo {... item.metainfo } />
    <LikesContainer id={item.id}/>
  </div>
);

BlogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number, 
    message: Message.PropTypes, 
    image: Image.PropTypes
  })
};

export default BlogItem;
