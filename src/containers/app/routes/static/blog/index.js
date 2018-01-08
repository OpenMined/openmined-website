import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button } from 'openmined-ui';
import { connect } from 'react-redux';
import { getPosts, getTaxonomy } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';
import BlogPosts from '../../../components/blog-posts';

import './blog.css';

const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

/*

  TODO
   - Tags and categories pages
   - Single pages

*/

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.loadMorePosts = this.loadMorePosts.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.hasOwnProperty('taxonomy')) {
      let { taxonomy, slug } = this.props.match.params;

      this.props.getPosts({
        page: this.state.page,
        [taxonomy]: slug
      });
    } else {
      this.props.getPosts({
        page: this.state.page
      });
    }

    this.props.getContent(false);
    this.props.getTaxonomy('categories');
    this.props.getTaxonomy('tags');
  }

  loadMorePosts() {
    let newPage = this.state.page + 1;

    this.props.getPosts({
      page: newPage
    });

    this.setState({
      page: newPage
    });
  }

  render() {
    const {
      content,
      posts,
      categories,
      tags,
      homepageLoaded,
      postsLoaded,
      outOfPosts
    } = this.props;

    return (
      <div id="blog">
        <Loading isLoading={homepageLoaded && postsLoaded} />
        <BlogHeader
          title="OpenMined Blog"
          excerpt={blogExcerpt}
          links={content.footer.links}
        />
        {posts && (
          <BlogPosts
            type="recent"
            posts={posts.slice(0, 3)}
            categories={categories}
            tags={tags}
          />
        )}
        {posts && (
          <BlogPosts
            type="previous"
            posts={posts.slice(3)}
            categories={categories}
            tags={tags}
          />
        )}
        {!outOfPosts && (
          <div id="more-posts">
            <Button onClick={this.loadMorePosts} color="dark-gray">
              Load more posts
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  homepageLoaded: state.homepage.isLoading,
  posts: state.blog.posts,
  categories: state.blog.categories,
  tags: state.blog.tags,
  postsLoaded: state.blog.isLoading,
  outOfPosts: state.blog.outOfPosts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContent, getPosts, getTaxonomy }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
