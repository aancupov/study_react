import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';


const items = [
  {
    msgItem: { text: 'Е-е-ее' },
    imageItem: 
    {
      src:    'http://static.jsbin.com/images/dave.min.svg',
      width:  '50px',
      height: '20px',
      alt:    'Bin'
    }
  },
  {
    msgItem: { text: 'О-о-оо' },
    imageItem: 
    {
      src:    'http://static.jsbin.com/images/dave.min.svg',
      width:  '50px',
      height: '20px',
      alt:    'Bin'
    }
  },
  {
    msgItem: { text: 'А-а-аа' },
    imageItem: 
    {
      src:    'http://static.jsbin.com/images/dave.min.svg',
      width:  '50px',
      height: '20px',
      alt:    'Bin'
    }
  },
  {
    msgItem: { text: 'У-у-уу' },
    imageItem: 
    {
      src:    'http://static.jsbin.com/images/dave.min.svg',
      width:  '50px',
      height: '20px',
      alt:    'Bin'
    }
  },
];


class BlogContainer extends React.Component {
  render() {
    return React.createElement(BlogList, _.assign({}, items));
  }
}
export default BlogContainer;
