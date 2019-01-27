import React from 'react';
import { Row, Column, Container } from '../../../../components/grid';
import moment from 'moment';
import Tilt from 'react-tilt';
import ExternalLink from '../../../../components/external-link';
import SectionHeading from '../../../../components/section-heading';
import Carousel from '../../../../components/carousel';

const POST_HEIGHT = 250;

/* eslint-disable camelcase */
const Post = ({ more, url, title, custom_excerpt, published_at }) => (
  <Tilt
    className="post"
    style={{ height: POST_HEIGHT }}
    options={{ reverse: true, max: 10, scale: 1, speed: 250 }}
  >
    <ExternalLink to={more + url}>
      <h5 className="title">{title}</h5>
      <p className="excerpt">{custom_excerpt}</p>
      <span className="date">Posted {moment(published_at).fromNow()}</span>
    </ExternalLink>
  </Tilt>
);

const Blog = ({ name, more, mailchimp, posts }) => (
  <div className="blog">
    <div className="metadata">
      <h4 className="title">{name}</h4>
      <ExternalLink to={`https://feedly.com/i/subscription/feed/${more}/rss/`}>
        <i className="fa fa-rss" aria-hidden="true" />
      </ExternalLink>
    </div>
    {posts && (
      <Carousel height={POST_HEIGHT}>
        {posts.map((post, index) => (
          <Post key={index} more={more} {...post} />
        ))}
      </Carousel>
    )}
    <ExternalLink className="read-more" to={more}>
      <i className="fa fa-share" aria-hidden="true" />
      <span>Read more blog posts</span>
    </ExternalLink>
    <ExternalLink className="mailchimp" to={mailchimp}>
      <i className="fa fa-envelope" aria-hidden="true" />
      <span>Subcribe for updates</span>
    </ExternalLink>
  </div>
);

const LatestNews = ({ blog }) => (
  <Container id="latest-news">
    <Row>
      <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
        <SectionHeading title="Latest News" level={3} />
      </Column>
    </Row>
    <Row id="blogs">
      <Column sizes={{ small: 12, xlarge: 10 }} offsets={{ xlarge: 1 }}>
        <Blog {...blog} />
      </Column>
    </Row>
  </Container>
);

export default LatestNews;
