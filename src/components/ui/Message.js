import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ children }) => (
  <div>
    <p>{ children }</p>
  </div>
);

Message.propTypes = {
  children: PropTypes.object
};

export default Message;
