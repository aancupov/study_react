import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

/////////////////////////////////////////////////////   BlogMsg

const BlogMsg = ( { msgItem } ) => (
  DOM.span(null, DOM.div(null, msgItem.text))
);

const defaultMsg = {
  text: 'Пропущено сообщение'
}

BlogMsg.defaultProps = {
  msgItem: defaultMsg
}

BlogMsg.propTypes = {
  text: PropTypes.string
}

export default BlogMsg;
