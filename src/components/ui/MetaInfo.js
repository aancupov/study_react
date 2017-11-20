import React from 'react';

import PropTypes from 'prop-types';

import moment from 'moment';

const formatDate = (date) => (
  moment(date).format('DD-MM-YYYY')
);

const MetaInfo = ({ author, createdAt, updatedAt }) => (
  <div className='meta'>
    <div>Author:     { author } </div>
    <div>Created at: { formatDate(createdAt) } </div>
    <div>Updated at: { formatDate(updatedAt) } </div>
  </div>
);

MetaInfo.propTypes = {
  author:    PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
};

MetaInfo.defaultProps = {
  author:    'admin',
  createdAt: '2000-01-01',
  updatedAt: '2000-01-01'
};

export default MetaInfo;
