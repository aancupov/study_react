import React from 'react';
import DOM from 'react-dom-factories'
import _ from 'lodash';

const Image = (url) => (
  DOM.img(url)
);

const MyText = (text) => (
  DOM.div(null,`${text}`)
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

const BlogList = ({ items }) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item,key) => (
        DOM.li({key},BlogItem(item))
      )
    )
  )
);

export default BlogList;