import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import moment from 'moment'
import Likes from './Likes'

class MetaInfo  extends React.Component {
  formatDate(date) {
    return moment(date).format("DD-MM-YYYY")
  }
  
  render() {
    const { author, createdAt, updatedAt } = this.props;
    return (
      DOM.div(
        null
        , DOM.div(null, `Author: ${ author }`)
        , DOM.div(null, `Created at: ${ this.formatDate(createdAt) }`)
        , DOM.div(null, `Updated at: ${ this.formatDate(updatedAt) }`)
      )
    )
  }
}

MetaInfo.propTypes = {
  author:    PropTypes.string,
  createdAt: PropTypes.string,
  updateAt:  PropTypes.string
}

MetaInfo.defaultProps = {
  author:    'admin',
  createdAt: '2000-01-01',
  updatedAt: '2000-01-01'
}

export default MetaInfo;
