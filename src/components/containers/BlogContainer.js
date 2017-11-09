import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';
import items from '../data/items';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };  
    this.like = this.like.bind(this);
  }

  like(id) {
    const items = _.cloneDeep(this.state.items);
    _.map(
      items, 
      (item) => {
        if (item.id === id) ++item.metainfo.likes;
      }
    );
    this.setState({items});
  }

  render() {
    return React.createElement(
      BlogList, { items: this.state.items, like: this.like }
    );
  }
}

export default BlogContainer;
