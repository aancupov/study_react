import React from 'react';

import BlogList from '../ui/BlogList';

import _ from 'lodash';

import request from 'superagent';

import 'css/app.css';

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };  
    this.like = this.like.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ items: res.body })
    );
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
