import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../../../../../modules/blog';

import './blog.css';

class Blog extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div id="blog">
        {posts.map(post => {
          return <div key={'blog-post-' + post.id}>{post.title.rendered}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.blog.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
