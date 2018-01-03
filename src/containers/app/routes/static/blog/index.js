import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';

import './blog.css';

const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

class Blog extends Component {
  componentDidMount() {
    this.props.getContent(false);
    this.props.getPosts();
  }

  render() {
    const { content, posts, homepageLoaded, postsLoaded } = this.props;

    return (
      <div id="blog">
        <Loading isLoading={homepageLoaded && postsLoaded} />
        <BlogHeader
          title="OpenMined Blog"
          excerpt={blogExcerpt}
          links={content.footer.links}
        />
        {posts.map(post => {
          return <div key={'blog-post-' + post.id}>{post.title.rendered}</div>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  homepageLoaded: state.homepage.isLoading,
  posts: state.blog.posts,
  postsLoaded: state.blog.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContent, getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
