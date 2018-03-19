import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Column, Heading } from 'openmined-ui';
import moment from 'moment';
import renderHTML from 'react-render-html';

import RepoIcon, { hasRepoIcon } from '../repo-icon';

import './blog-posts.css';

const lookupTaxonomy = (list, id) => {
  let returned = {};

  list.forEach(taxonomy => {
    if (taxonomy.id === id) {
      returned = taxonomy;
    }
  });

  return returned;
};

const getExcerpt = (excerpt, length) => {
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
};

const BlogPost = ({ post, level, categories, tags }) => {
  const category = lookupTaxonomy(categories, post.categories[0]);
  const date = moment(post.date_gmt).format('MMM DD, YYYY');
  console.log(post);
  const correctExcerpt = getExcerpt(post.excerpt.rendered, 20);

  return (
    <div className={`blog-post ${category.slug}`}>
      <Link to={`/blog/${post.slug}`}>
        <Heading notCapped level={level} className="title">
          {post.title.rendered}
        </Heading>
        <p className="excerpt">{renderHTML(correctExcerpt)}</p>
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
            tag = lookupTaxonomy(tags, tag);

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
};

class BlogPosts extends Component {
  render() {
    const { posts, categories, tags, type } = this.props;

    if (type === 'recent') {
      return (
        <Container id="recent-posts">
          <Row>
            <Column
              sizes={{ small: 12, large: 6, xlarge: 6 }}
              className="greater"
            >
              {posts.slice(0, 1).map(post => {
                return (
                  <BlogPost
                    post={post}
                    categories={categories}
                    tags={tags}
                    level={2}
                    key={`blog-post-${post.id}`}
                  />
                );
              })}
            </Column>
            <Column
              sizes={{ small: 12, large: 6, xlarge: 6 }}
              className="lesser"
            >
              {posts.slice(1, 3).map(post => {
                return (
                  <BlogPost
                    post={post}
                    categories={categories}
                    tags={tags}
                    level={2}
                    key={`blog-post-${post.id}`}
                  />
                );
              })}
            </Column>
          </Row>
        </Container>
      );
    } else if (type === 'previous') {
      return (
        <Container id="posts-container">
          <Row>
            {posts.map(post => {
              return (
                <Column
                  sizes={{ small: 12, large: 6, xlarge: 4 }}
                  key={'blog-post-' + post.id}
                >
                  <BlogPost
                    post={post}
                    categories={categories}
                    tags={tags}
                    level={3}
                  />
                </Column>
              );
            })}
          </Row>
        </Container>
      );
    }
  }
}

export default BlogPosts;
