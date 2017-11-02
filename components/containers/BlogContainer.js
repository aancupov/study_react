import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';
import items from '../data/items';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: []
    }  
    for(var i=0; i<items.length; i++) this.state.count[i] = 0;
  }

  like(id) {
    ++this.state.count[id];
    this.setState({count: this.state.count});
  }

  render() {
    return React.createElement(
      BlogList, { items, nlikes: this.state.count, like: this.like.bind(this) }
    );
  }
}

export default BlogContainer;
