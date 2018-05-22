import React from 'react';
import { Row, Column, Container } from 'openmined-ui';
import SectionHeading from '../../../../components/section-heading';

const Blog = ({ posts }) => (
  <div className="blog">
    {posts &&
      posts.map(post => {
        return <p key={post.id}>{post.id}</p>;
      })}
  </div>
);

const LatestNews = ({ blog, digs }) => (
  <Container id="latest-news">
    <Row>
      <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
        <SectionHeading title="Latest News" level={3} />
      </Column>
    </Row>
    <Row>
      <Column
        sizes={{ small: 12, large: 6, xlarge: 5 }}
        offsets={{ xlarge: 1 }}
      >
        <Blog posts={blog} />
      </Column>
      <Column sizes={{ small: 12, large: 6, xlarge: 5 }}>
        <Blog posts={digs} />
      </Column>
    </Row>
  </Container>
);

export default LatestNews;
