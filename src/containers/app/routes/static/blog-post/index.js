import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentPost } from '../../../../../modules/blog';

import './blog-post.css';

class BlogPost extends Component {
  componentDidMount() {
    this.props.getCurrentPost(this.props.match.params.slug);
  }

  render() {
    const { post } = this.props;

    return (
      <div id="blog-post">{post.title && <div>{post.title.rendered}</div>}</div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.blog.currentPost
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
