import React from 'react';
import DOM from 'react-dom-factories'
import _ from 'lodash';

const Image = (props) => (
    DOM.img(props)
);

const MyText = (name) => (
  DOM.div(null,`${name}`)
);

const TextBox = (props) => (
  DOM.span(
    null, 
    MyText(props.txt)
  )
);

const BlogItem = (props) => (
  DOM.div(
    null,
    Image(props.image),
    TextBox(props.text)
  )
);

const BlogList = ({ Items }) => (
  DOM.ul(
    null,
    _.map(
      Items,
      (item,key) => (
        DOM.li({key},BlogItem(item))
      )
    )
  )
);

export default BlogList;