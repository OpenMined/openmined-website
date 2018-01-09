import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Column } from 'openmined-ui';
import renderHTML from 'react-render-html';
import { getCurrentPost } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';

import './blog-post.css';

class BlogPost extends Component {
  componentDidMount() {
    this.props.getContent(false);
    this.props.getCurrentPost(this.props.match.params.slug);
  }

  getExcerpt(post, categories, tags) {
    /* TODO: Fill the blog header in with a real excerpt */
    return <span>Hello world</span>;
  }

  render() {
    const {
      post,
      categories,
      tags,
      homepageLoaded,
      currentPostReady,
      content
    } = this.props;

    return (
      <div id="blog-post">
        <Loading shouldHideWhen={homepageLoaded && currentPostReady} />
        {currentPostReady && (
          <div id="post-content">
            <BlogHeader
              title={post.title.rendered}
              excerpt={this.getExcerpt(post, categories, tags)}
              links={content.footer.links}
            />
            <Container>
              <Row>
                <Column sizes={{ small: 12 }}>
                  {renderHTML(post.content.rendered)}
                </Column>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.blog.currentPost,
  content: state.homepage.content,
  homepageLoaded: state.homepage.homepageLoaded,
  categories: state.blog.categories,
  tags: state.blog.tags,
  currentPostReady:
    state.blog.currentPostLoaded &&
    state.blog.categoriesLoaded &&
    state.blog.tagsLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContent, getCurrentPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
