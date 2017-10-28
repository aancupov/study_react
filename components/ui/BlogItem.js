import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import BlogImage from './BlogImage'
import BlogMsg from './BlogMsg'
import MetaInfo from './MetaInfo'

///////////////////////////////////////////////////////    BlogItem

const BlogItem = ({ imageItem, msgItem, metainfo }) => (
  DOM.div(
    null
    , React.createElement(BlogImage, { imageItem })
    , React.createElement(BlogMsg,   { msgItem })
    , React.createElement(MetaInfo,  { metainfo })  
  )
);

BlogItem.propTypes = {
  msgItem:    PropTypes.shape( { text: PropTypes.string }),
  imageItem:  PropTypes.shape(
    {
      src:    PropTypes.string,
      width:  PropTypes.string,
      height: PropTypes.string,
      alt:    PropTypes.string
     
    }
  )
}

export default BlogItem;
