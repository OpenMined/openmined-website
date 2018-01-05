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
import RepoIcon, { hasRepoIcon } from '../../../components/repo-icon';

import './blog.css';

const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

/*

  TODO
   - Tags and categories pages
   - Working admin link
   - Single pages

*/

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

  getExcerpt(excerpt, length) {
    let firstParaIndex = excerpt.indexOf('<p>') + 3;
    let firstParaEndingIndex = excerpt.indexOf('</p>') - 3;
    let firstPara = excerpt.substr(firstParaIndex, firstParaEndingIndex);

    const trimByWord = (sentence, length) => {
      let result = sentence;
      let resultArray = result.split(' ');

      if (resultArray.length > length) {
        resultArray = resultArray.slice(0, length);
        result = resultArray.join(' ') + '...';
      }

      return result;
    };

    return trimByWord(firstPara, length);
  }

  renderBlogPost({ post, level, unimportant, key }) {
    const category = this.lookupTaxonomy('categories', post.categories[0]);
    const date = moment(post.date_gmt).format('MMM DD, YYYY');
    const correctExcerpt = this.getExcerpt(post.excerpt.rendered, 20);

    return (
      <div
        className={`blog-post ${category.slug} ${unimportant
          ? 'unimportant'
          : 'important'}`}
        key={key ? 'blog-post-' + key : null}
      >
        <Link to={`/blog/${post.slug}`}>
          <Heading notCapped level={level} className="title">
            {post.title.rendered}
          </Heading>
          <p className="excerpt">{correctExcerpt}</p>
        </Link>
        <div className="metadata">
          <div className="details">
            <Link to={`/blog/categories/${category.slug}`} className="category">
              {category.name}
            </Link>{' '}
            | <span className="date">{date}</span>
          </div>
          <div className="tags">
            {post.tags.map(tag => {
              tag = this.lookupTaxonomy('tags', tag);

              if (hasRepoIcon(tag.slug)) {
                return (
                  <Link
                    to={`/blog/tags/${tag.slug}`}
                    className="tag"
                    key={`blog-post-${post.id}-tag-${tag.id}`}
                  >
                    <RepoIcon repo={tag.slug} />
                  </Link>
                );
              }
              return null;
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
        <Container id="recent-posts">
          <Row>
            <Column
              sizes={{ small: 12, large: 6, xlarge: 6 }}
              className="greater"
            >
              {posts.slice(0, 1).map(post => {
                return this.renderBlogPost({
                  post: post,
                  level: 2
                });
              })}
            </Column>
            <Column
              sizes={{ small: 12, large: 6, xlarge: 6 }}
              className="lesser"
            >
              {posts.slice(1, 3).map((post, index) => {
                return this.renderBlogPost({
                  post: post,
                  level: 2,
                  key: index
                });
              })}
            </Column>
          </Row>
        </Container>
        <Container id="posts-container">
          <Row>
            {posts.slice(3).map(post => {
              return (
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 4 }}
                  key={'blog-post-' + post.id}
                >
                  {this.renderBlogPost({
                    post: post,
                    level: 3,
                    unimportant: true
                  })}
                </Column>
              );
            })}
          </Row>
        </Container>
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
