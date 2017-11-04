import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import Image from './Image'
import Message from './Message'
import MetaInfo from './MetaInfo'

const BlogItem = ({ item, like }) => (
  DOM.div(
    null
    , React.createElement(Image,    item.image)
    , React.createElement(Message,  item.message)
    , React.createElement(MetaInfo, item.metainfo)  
    , React.createElement(Likes,    { item, like })
  )
);

BlogItem.propTypes = {
  message:    PropTypes.shape( { text: PropTypes.string }),
  image:  PropTypes.shape(
    {
      src:    PropTypes.string,
      width:  PropTypes.string,
      height: PropTypes.string,
      alt:    PropTypes.string     
    }
  )
}

export default BlogItem;
