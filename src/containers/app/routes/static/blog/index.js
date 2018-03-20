import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Page } from 'openmined-ui';
import { connect } from 'react-redux';
import { withWrapper } from 'create-react-server/wrapper';
import { getPosts } from '../../../../../modules/blog';
import { getContent } from '../../../../../modules/homepage';

import BlogHeader from '../../../components/blog-header';
import Loading from '../../../components/loading';
import BlogPosts from '../../../components/blog-posts';
import FooterLinks from '../../../components/footer-links';

import './blog.css';

const blogTitle = 'OpenMined Blog';
const blogShortName = 'Blog';
const blogExcerpt =
  'Home to the latest research, thoughts, and demos surrounding the OpenMined project and the larger artificial intelligence ecosystem.';

// TODO: Newsletter link...

// TODO: Add links to individual tags within digs

class Blog extends Component {
  static async getInitialProps(props) {
    // TODO: Figure out a better way to do this
    let pathname = props.location.pathname.split('/');
    let request = { page: 1 };

    if (pathname[1] === 'digs') {
      request.digs = true;
    }

    if (pathname.length > 3) {
      let taxonomy = pathname[2];
      let slug = pathname[3];

      request[taxonomy] = slug;
    }

    await props.store.dispatch(getPosts(request, true));
  }

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
  }

  componentWillReceiveProps(newProps) {
    const newUrl = newProps.match.params;
    const oldUrl = this.props.match.params;

    if (
      newUrl.taxonomy !== oldUrl.taxonomy ||
      newUrl.slug !== oldUrl.slug ||
      newUrl.locale !== oldUrl.locale
    ) {
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
      let { taxonomy, slug, locale } = this.props.match.params;

      this.props.getPosts(
        {
          page: this.state.page,
          [taxonomy]: slug,
          digs: locale === 'digs'
        },
        isFresh
      );
    } else if (!hasTaxonomy) {
      let { locale } = this.props.match.params;

      this.props.getPosts(
        {
          page: this.state.page,
          digs: locale === 'digs'
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

  seoHeaderInfo(taxonomy, slug, shortName, excerpt) {
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
        title: shortName + ' - ' + taxonomyData.name,
        description: taxonomyData.description || excerpt
      };
    } else {
      return {
        title: shortName,
        description: excerpt
      };
    }
  }

  blogHeaderInfo(taxonomy, slug, title, excerpt) {
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
        title,
        excerpt,
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
      outOfPosts,
      content
    } = this.props;

    const { taxonomy, slug, locale } = this.props.match.params;

    let title, shortName, excerpt;

    if (locale === 'digs') {
      let digsData = {};

      categories.forEach(category => {
        if (category.slug === locale) {
          digsData = category;
        }
      });

      title = digsData.name;
      shortName = title;
      excerpt = digsData.description;
    } else {
      title = blogTitle;
      shortName = blogShortName;
      excerpt = blogExcerpt;
    }

    return (
      <Page
        id="blog"
        {...this.seoHeaderInfo(taxonomy, slug, shortName, excerpt)}
      >
        <Loading shouldHideWhen={homepageLoaded && postsReady} />
        {postsReady && (
          <div id="posts-content">
            <BlogHeader
              {...this.blogHeaderInfo(taxonomy, slug, title, excerpt)}
            />
            <BlogPosts
              type="recent"
              posts={posts.slice(0, 3)}
              categories={categories}
              tags={tags}
              locale={locale}
            />
            <BlogPosts
              type="previous"
              posts={posts.slice(3)}
              categories={categories}
              tags={tags}
              locale={locale}
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
        {homepageLoaded && (
          <FooterLinks
            links={content.footer.links}
            socialMedia={content.general.social_media}
          />
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

export default withWrapper(connect(mapStateToProps, mapDispatchToProps)(Blog));
