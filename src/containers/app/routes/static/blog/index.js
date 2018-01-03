import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Column, Button, Heading } from 'openmined-ui';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { getPosts, getTaxonomy } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';

import './blog.css';

const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.loadMorePosts = this.loadMorePosts.bind(this);
    this.lookupTaxonomy = this.lookupTaxonomy.bind(this);
  }

  componentDidMount() {
    this.props.getContent(false);
    this.props.getPosts({
      page: this.state.page
    });
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

  renderBlogPost(post, level) {
    const category = this.lookupTaxonomy('categories', post.categories[0]);
    const date = moment(post.date_gmt).format('MMM DD, YYYY');

    return (
      <div className="blog-post">
        <Link to={`/blog/${post.slug}`} className="title">
          <Heading notCapped level={level}>
            {post.title.rendered}
          </Heading>
        </Link>
        <div className="excerpt">{renderHTML(post.excerpt.rendered)}</div>
        <div className="metadata">
          <div className="details">
            {category.name} | {date}
          </div>
          <div className="tags">
            {post.tags.map(tag => {
              tag = this.lookupTaxonomy('tags', tag);

              return <span>{tag.name}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }

  lookupTaxonomy(type, id) {
    let returned = {};

    this.props[type].forEach(taxonomy => {
      if (taxonomy.id === id) {
        returned = taxonomy;
      }
    });

    return returned;
  }

  render() {
    const {
      content,
      posts,
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
        <div id="featured-posts">
          {posts.slice(0, 3).map(post => {
            return this.renderBlogPost(post, 2);
          })}
        </div>
        <Container id="posts-container">
          <Row>
            {posts.slice(3).map(post => {
              return (
                <Column
                  sizes={{ small: 12, medium: 6, large: 4 }}
                  key={'blog-post-' + post.id}
                >
                  {this.renderBlogPost(post, 3)}
                </Column>
              );
            })}
          </Row>
        </Container>
        {!outOfPosts && (
          <div id="more-posts">
            <Button onClick={this.loadMorePosts}>Load more posts</Button>
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
