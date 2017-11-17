import React from 'react';
import BlogList from '../ui/BlogList';
import _ from 'lodash';
import items from '../data/items';
import 'css/app.css';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items, all: true, only: 0 };  
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
    return(
      <BlogList items={this.state.items} like={this.like}/>
    );
  }
}

export default BlogContainer;
