import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import moment from 'moment';

const formatDate = (date) => (
  moment(date).format('DD-MM-YYYY')
);

class MetaInfo  extends React.Component {
  
  render() {
    const { author, createdAt, updatedAt } = this.props;
    return (
      DOM.div(
        null
        , DOM.div(null, `Author: ${author}`)
        , DOM.div(null, `Created at: ${formatDate(createdAt)}`)
        , DOM.div(null, `Updated at: ${formatDate(updatedAt)}`)
      )
    );
  }
}

MetaInfo.propTypes = {
  author:    PropTypes.string,
  createdAt: PropTypes.string,
  updateAt:  PropTypes.string
};

MetaInfo.defaultProps = {
  author:    'admin',
  createdAt: '2000-01-01',
  updatedAt: '2000-01-01'
};

export default MetaInfo;
