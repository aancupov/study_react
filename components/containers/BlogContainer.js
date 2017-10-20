import React from 'react';

import BlogList from '../ui/BlogList';


const Items = [
  {
    text:{txt:'Е-е-ее'},
    image: 
    {
      src:'http://static.jsbin.com/images/dave.min.svg',
      width:'50px',
      height:'20px',
      alt:'Bin'
    }
  },
  {
    text:{txt:'О-о-оо'},
    image: 
    {
      src:'http://static.jsbin.com/images/dave.min.svg',
      width:'50px',
      height:'20px',
      alt:'Bin'
    }
  },
  {
    text:{txt:'А-а-аа'},
    image: 
    {
      src:'http://static.jsbin.com/images/dave.min.svg',
      width:'50px',
      height:'20px',
      alt:'Bin'
    }
  },
  {
    text:{txt:'У-у-уу'},
    image: 
    {
      src:'http://static.jsbin.com/images/dave.min.svg',
      width:'50px',
      height:'20px',
      alt:'Bin'
    }
  },
];


class BlogContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Items };
  }

  render() {
    const { Items } = this.state;

    return React.createElement(BlogList, { Items });
  }
}

export default BlogContainer;
