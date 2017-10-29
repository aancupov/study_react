import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import Image from './Image'
import Message from './Message'
import MetaInfo from './MetaInfo'

const BlogItem = ({ image, message, metainfo }) => (
  DOM.div(
    null
    , React.createElement(Image,    image)
    , React.createElement(Message,  message)
    , React.createElement(MetaInfo, metainfo)  
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
