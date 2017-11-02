import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

////////////////////////////////////////////////////    BlogImage

const BlogImage = ( { imageItem } ) => {
  return DOM.img(imageItem)
}

BlogImage.propTypes = {
  imageItem: PropTypes.shape(
    {
      src:    PropTypes.string,
      width:  PropTypes.string,
      height: PropTypes.string,
      alt:    PropTypes.string     
    }
  )
}

const defaultImage = {
  src: 'https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
  width:  '50px',
  height: '20px',
  alt:    'Default image'
}

BlogImage.defaultProps = {
  imageItem: defaultImage
}


export default BlogImage;
