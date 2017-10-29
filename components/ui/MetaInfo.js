import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import moment from 'moment'
import Likes from './Likes'

class MetaInfo  extends React.Component {
  //console.log(createdAt);
  formatDate(date) {
    return moment(date).format("DD-MM-YYYY")
  }
  
  render() {
    const { author, createdAt, updatedAt, likes } = this.props;
    return (
      DOM.div(
        null
        , DOM.div(null, `Author: ${ author }`)
        , DOM.div(null, `Created at: ${ this.formatDate(createdAt) }`)
        , DOM.div(null, `Updated at: ${ this.formatDate(updatedAt) }`)
        , React.createElement(Likes, { likes })
      )
    )
  }
}

MetaInfo.propTypes = {
  author:    PropTypes.string,
  createdAt: PropTypes.string,
  updateAt:  PropTypes.string,
  likes:     PropTypes.number
}

MetaInfo.defaultProps = {
  author:    'admin',
  createdAt: '2000-01-01',
  updatedAt: '2000-01-01',
  likes:     0
}

export default MetaInfo;
