import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import moment from 'moment'
import BlogItem from './BlogItem';



////////////////////////////////////////////////////////   BlogList

const BlogList = (prop) => (
  DOM.ul(
    null,
    _.map(
      prop,
      (item, key) => (
        DOM.li({ key }, React.createElement(BlogItem, item ))
      )
    )
  )
)

export default BlogList;