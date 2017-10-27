import React from 'react';
import DOM from 'react-dom-factories'
import _ from 'lodash';

const BlogMsg = ( { msgItem } ) => (
  DOM.span(null, DOM.div(null, msgItem.text))
);

const BlogImage = ( { imageItem } ) => (
  DOM.img(imageItem)
);

const BlogItem = ( { imageItem, msgItem } ) => (
  DOM.div(
    null
    , React.createElement(BlogImage, { imageItem })
    , React.createElement(BlogMsg,   { msgItem })
  )
);

const BlogList = ( fromContainer ) => (
  DOM.ul(
    null,
    _.map(
      fromContainer,
      (item, key) => (
        DOM.li({ key }, React.createElement(BlogItem, item ))
      )
    )
  )
)

export default BlogList;