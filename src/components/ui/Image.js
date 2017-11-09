import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

const Image = ({ src, width, height, alt }) => {
  return DOM.img({ src, width, height, alt });
};

Image.propTypes = {
  src:    PropTypes.string,
  width:  PropTypes.string,
  height: PropTypes.string,
  alt:    PropTypes.string
};

Image.defaultProps = {
  src: 'dist/images/world.png',
  width:  '50px',
  height: '20px',
  alt:    'Default image'
};

export default Image;
