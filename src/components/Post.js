//Внутренняя компонента для поста

import React from 'react';

import PropTypes from 'prop-types';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/ui/BlogItem';

import request from 'superagent';


class Post  extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: {metainfo: {likes:0}} };
  }

  componentDidMount() {
    this.fetchPost(this.props.match.params.id);
  }

  fetchPost(id) {
    request.get(
      'http://localhost:3001/',
      {id},
      (err, res) => (this.setState({ item: res.body }))
    );
  }

  render() {
    return (
      <Item.Group>
        <BlogItem item={this.state.item}/>
      </Item.Group>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object
};

export default Post;
