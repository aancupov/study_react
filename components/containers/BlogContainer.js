import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';
import items from '../data/items';

function changeState(id) {
  return function update(state) {
    _.map(state.items, function (item) {
      if(item.id === id) ++item.metainfo.likes;
    });
    return state;
  } 
}

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };  
    like = this.like.bind(this);
  }

  like(id) {
    this.setState(changeState(id));
  }

  render() {
    return React.createElement(
      BlogList, { items: this.state.items, like }
    );
  }
}

export default BlogContainer;
