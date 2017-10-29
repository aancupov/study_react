import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

const Image = ({ src, width, height, alt }) => {
  return DOM.img({ src, width, height, alt })
}

Image.propTypes = {
  src:    PropTypes.string,
  width:  PropTypes.string,
  height: PropTypes.string,
  alt:    PropTypes.string
}

const defaultImage = {
  src: 'https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
  width:  '50px',
  height: '20px',
  alt:    'Default image'
}

Image.defaultProps = {
  src: 'https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
  width:  '50px',
  height: '20px',
  alt:    'Default image'
}

export default Image;
