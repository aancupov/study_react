import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

const Message = ({ text }) => (
  DOM.span(null, DOM.div(null, text))
);

Message.defaultProps = {
  text: 'Пропущено сообщение'
}

Message.propTypes = {
  text: PropTypes.string
}

export default Message;
