import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import moment from 'moment'
import Likes from './Likes'

///////////////////////////////////////////////////    MetaInfo

const MetaInfo = ( { metainfo } ) => {
  const { author, createdAt, updatedAt } = metainfo;
  //console.log(createdAt);
  
  return (
    DOM.div(
      null
      , DOM.div(null, `Author: ${ author }`)
      , DOM.div(null, `Created at: ${ moment(createdAt).format("DD-MM-YYYY") }`)
      , DOM.div(null, `Updated at: ${ moment(updatedAt).format("DD-MM-YYYY") }`)
      , React.createElement(Likes, metainfo)
    )
  )
}

MetaInfo.propTypes = {
  metainfo: PropTypes.shape(
    {
      author:    PropTypes.string,
      createdAt: PropTypes.string,
      updateAt:  PropTypes.string,
      likes:     PropTypes.number
     
    }
  )
}

const default_metainfo = {
  author:    'admin',
  createdAt: '2000-01-01',
  updatedAt: '2000-01-01',
  likes:     0
}

MetaInfo.defaultProps = {
  metainfo: default_metainfo  
}

export default MetaInfo;
