import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withWrapper } from 'create-react-server/wrapper';
import { Container, Row, Column, Page } from 'openmined-ui';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { getCurrentPost } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';

import './blog-post.css';

const lookupTaxonomy = (list, id) => {
  let returned = {};

  if (list) {
    list.forEach(taxonomy => {
      if (taxonomy.id === id) {
        returned = taxonomy;
      }
    });
  }

  return returned;
};

class BlogPost extends Component {
  static async getInitialProps(props) {
    // TODO: Figure out a better way to do this
    let pathname = props.location.pathname.split('/');

    await props.store.dispatch(getCurrentPost(pathname[2]));
  }

  componentWillMount() {
    this.props.getContent(false);
  }

  getExcerpt(post, author) {
    const date = moment(post.date_gmt).format('MMMM Do, YYYY');
    const avatar =
      author.avatar_urls['96'] ||
      author.avatar_urls['48'] ||
      author.avatar_urls['24'];

    return (
      <div className="blog-author">
        <div className="avatar">
          <img src={avatar} alt={author.name} />
        </div>
        <div className="info">
          <span className="date">
            Posted on <strong>{date}</strong> by <strong>{author.name}</strong>
          </span>
        </div>
      </div>
    );
  }

  getCategory(locale, categories, post) {
    let category;

    if (locale === 'blog') {
      category = lookupTaxonomy(categories, post.categories[0]);
      category.link = '/blog/categories/' + category.slug;
    } else {
      category = lookupTaxonomy(categories, post.categories[0]);
      category.link = '/digs';
    }

    return (
      <div id="the-category">
        <span>Posted under </span>
        <Link to={category.link}>{category.name}</Link>
      </div>
    );
  }

  getTags(locale, tags, post) {
    return (
      <div id="the-tags">
        <span>Tagged with </span>
        <ul>
          {post.tags.map(tag => {
            tag = lookupTaxonomy(tags, tag);

            return (
              <li key={`blog-post-tag-${tag.slug}`}>
                <Link to={`/${locale}/tags/${tag.slug}`}>#{tag.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  seoHeaderInfo(post, categories, tags, featuredMedia) {
    if (post.title) {
      let firstParaIndex = post.excerpt.rendered.indexOf('<p>') + 3;
      let firstParaEndingIndex = post.excerpt.rendered.indexOf('</p>') - 3;
      let firstPara = post.excerpt.rendered.substr(
        firstParaIndex,
        firstParaEndingIndex
      );
      let theCategory = lookupTaxonomy(categories, post.categories[0]);
      let theTags = [];

      post.tags.forEach(tag => {
        let foundTag = lookupTaxonomy(tags, tag);

        if (foundTag) {
          theTags.push(foundTag.name);
        }
      });

      return {
        title: post.title.rendered,
        description: firstPara.substring(0, 160),
        image: featuredMedia.source_url ? featuredMedia.source_url : null,
        category: theCategory.name ? theCategory.name : null,
        tags: theTags.length > 0 ? theTags.join() : null
      };
    } else {
      return null;
    }
  }

  render() {
    const {
      post,
      categories,
      tags,
      featuredMedia,
      author,
      homepageLoaded,
      currentPostReady,
      content
    } = this.props;

    const { locale } = this.props.match.params;

    return (
      <Page
        id="blog-post"
        {...this.seoHeaderInfo(post, categories, tags, featuredMedia)}
      >
        <Loading shouldHideWhen={homepageLoaded && currentPostReady} />
        {currentPostReady && (
          <div id="post-content">
            <BlogHeader
              title={post.title.rendered}
              excerpt={this.getExcerpt(post, author)}
              links={content.footer.links}
            />
            <Container>
              <Row>
                <Column sizes={{ small: 12 }}>
                  {this.getCategory(locale, categories, post)}
                </Column>
              </Row>
              <Row>
                <Column sizes={{ small: 12 }}>
                  {post.tags.length > 0 && this.getTags(locale, tags, post)}
                </Column>
              </Row>
              <Row>
                <Column sizes={{ small: 12 }}>
                  <div id="the-content">
                    {renderHTML(post.content.rendered)}
                  </div>
                </Column>
              </Row>
            </Container>
          </div>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  post: state.blog.currentPost,
  featuredMedia: state.blog.currentFeaturedMedia,
  author: state.blog.currentAuthor,
  content: state.homepage.content,
  homepageLoaded: state.homepage.homepageLoaded,
  categories: state.blog.categories,
  tags: state.blog.tags,
  currentPostReady:
    state.blog.currentPostLoaded &&
    state.blog.currentFeaturedMediaLoaded &&
    state.blog.currentAuthorLoaded &&
    state.blog.categoriesLoaded &&
    state.blog.tagsLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContent }, dispatch);

export default withWrapper(
  connect(mapStateToProps, mapDispatchToProps)(BlogPost)
);
