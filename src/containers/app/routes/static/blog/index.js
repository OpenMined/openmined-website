import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Page } from 'openmined-ui';
import { connect } from 'react-redux';
import { getPosts } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';
import BlogPosts from '../../../components/blog-posts';

import './blog.css';

const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

// TODO: Newsletter link...

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.loadPosts = this.loadPosts.bind(this);
    this.loadMorePosts = this.loadMorePosts.bind(this);
    this.blogHeaderInfo = this.blogHeaderInfo.bind(this);
  }

  componentDidMount() {
    this.props.getContent(false);
    this.loadPosts(this.state.page, true);
  }

  componentWillReceiveProps(newProps) {
    const newUrl = newProps.match.params;
    const oldUrl = this.props.match.params;

    if (newUrl.taxonomy !== oldUrl.taxonomy || newUrl.slug !== oldUrl.slug) {
      this.setState(
        {
          page: 1
        },
        () => {
          this.loadPosts(this.state.page, true);
        }
      );
    }
  }

  loadPosts(page = 1, isFresh = false) {
    const hasTaxonomy = this.props.match.params.hasOwnProperty('taxonomy');

    if (hasTaxonomy) {
      let { taxonomy, slug } = this.props.match.params;

      this.props.getPosts(
        {
          page: this.state.page,
          [taxonomy]: slug
        },
        isFresh
      );
    } else if (!hasTaxonomy) {
      this.props.getPosts(
        {
          page: this.state.page
        },
        isFresh
      );
    }
  }

  loadMorePosts() {
    let newPage = this.state.page + 1;

    this.setState(
      {
        page: newPage
      },
      () => {
        this.loadPosts(newPage, false);
      }
    );
  }

  seoHeaderInfo(taxonomy, slug) {
    if (taxonomy && slug) {
      const lookupTaxonomy = (list, slug) => {
        let returned = {};

        list.forEach(taxonomy => {
          if (taxonomy.slug === slug) {
            returned = taxonomy;
          }
        });

        return returned;
      };

      let taxonomyData =
        taxonomy === 'categories'
          ? lookupTaxonomy(this.props.categories, slug)
          : lookupTaxonomy(this.props.tags, slug);

      return {
        title: 'Blog - ' + taxonomyData.name,
        description: taxonomyData.description || blogExcerpt
      };
    } else {
      return {
        title: 'Blog',
        description: blogExcerpt
      };
    }
  }

  blogHeaderInfo(taxonomy, slug) {
    let links = this.props.content.footer.links;

    if (taxonomy && slug) {
      const lookupTaxonomy = (list, slug) => {
        let returned = {};

        list.forEach(taxonomy => {
          if (taxonomy.slug === slug) {
            returned = taxonomy;
          }
        });

        return returned;
      };

      let taxonomyData =
        taxonomy === 'categories'
          ? lookupTaxonomy(this.props.categories, slug)
          : lookupTaxonomy(this.props.tags, slug);

      return {
        title: taxonomyData.name,
        excerpt: taxonomyData.description || null,
        links
      };
    } else {
      return {
        title: 'OpenMined Blog',
        excerpt: blogExcerpt,
        links
      };
    }
  }

  render() {
    const {
      posts,
      categories,
      tags,
      homepageLoaded,
      postsReady,
      outOfPosts
    } = this.props;

    const { taxonomy, slug } = this.props.match.params;

    return (
      <Page id="blog" {...this.seoHeaderInfo(taxonomy, slug)}>
        <Loading shouldHideWhen={homepageLoaded && postsReady} />
        {postsReady && (
          <div id="posts-content">
            <BlogHeader {...this.blogHeaderInfo(taxonomy, slug)} />
            <BlogPosts
              type="recent"
              posts={posts.slice(0, 3)}
              categories={categories}
              tags={tags}
            />
            <BlogPosts
              type="previous"
              posts={posts.slice(3)}
              categories={categories}
              tags={tags}
            />
            {!outOfPosts && (
              <div id="more-posts">
                <Button onClick={this.loadMorePosts} color="dark-gray">
                  Load more posts
                </Button>
              </div>
            )}
          </div>
        )}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homepage.content,
  homepageLoaded: state.homepage.homepageLoaded,
  posts: state.blog.posts,
  categories: state.blog.categories,
  tags: state.blog.tags,
  postsReady:
    state.blog.postsLoaded &&
    state.blog.categoriesLoaded &&
    state.blog.tagsLoaded,
  outOfPosts: state.blog.outOfPosts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContent, getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
