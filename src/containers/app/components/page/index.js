import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

const defaultUrl = process.env.REACT_APP_SITE_URL;
const defaultTitle = 'OpenMined';
const defaultDescription =
  'OpenMined is an open-source community focused on researching, developing, and elevating tools for secure, privacy-preserving, value-aligned artificial intelligence.';
const defaultImage = `${defaultUrl}/images/logo.png`;
const defaultFacebookImage = `${defaultUrl}/images/logo-facebook.png`;
const defaultTwitterImage = `${defaultUrl}/images/logo-twitter.png`;
const defaultTwitter = '@openminedorg';
const defaultSep = ' | ';

class Page extends Component {
  getMetaTags(
    {
      title,
      description,
      image,
      facebookImage,
      twitterImage,
      contentType,
      twitter,
      noCrawl,
      published,
      updated,
      category,
      tags
    },
    pathname
  ) {
    const theTitle = title
      ? (title + defaultSep + defaultTitle).substring(0, 60)
      : defaultTitle;
    const theDescription = description
      ? description.substring(0, 240)
      : defaultDescription;
    const theImage = image ? image : defaultImage;

    let theFacebookImage;
    let theTwitterImage;

    if (facebookImage) {
      theFacebookImage = facebookImage;
    } else if (image) {
      theFacebookImage = image;
    } else {
      theFacebookImage = defaultFacebookImage;
    }

    if (twitterImage) {
      theTwitterImage = twitterImage;
    } else if (image) {
      theTwitterImage = image;
    } else {
      theTwitterImage = defaultTwitterImage;
    }

    const metaTags = [
      { itemprop: 'name', content: theTitle },
      { itemprop: 'description', content: theDescription },
      { itemprop: 'image', content: theImage },
      { name: 'description', content: theDescription },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: defaultTwitter },
      { name: 'twitter:title', content: theTitle },
      { name: 'twitter:description', content: theDescription },
      { name: 'twitter:creator', content: twitter || defaultTwitter },
      { name: 'twitter:image:src', content: theTwitterImage },
      { property: 'og:title', content: theTitle },
      { property: 'og:type', content: contentType || 'website' },
      { property: 'og:url', content: defaultUrl + pathname },
      { property: 'og:image', content: theFacebookImage },
      { property: 'og:description', content: theDescription },
      { property: 'og:site_name', content: defaultTitle },
      { property: 'fb:app_id', content: '308339039653695' }
    ];

    if (noCrawl) {
      metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
    }

    if (published) {
      metaTags.push({ name: 'article:published_time', content: published });
    }
    if (updated) {
      metaTags.push({ name: 'article:modified_time', content: updated });
    }
    if (category) {
      metaTags.push({ name: 'article:section', content: category });
    }
    if (tags) {
      metaTags.push({ name: 'article:tag', content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;

    return (
      <div id={id} className={className}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
            itemscope: undefined,
            itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
          }}
          title={
            rest.title ? rest.title + defaultSep + defaultTitle : defaultTitle
          }
          link={[
            {
              rel: 'canonical',
              href: defaultUrl + this.props.location.pathname
            }
          ]}
          meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </div>
    );
  }
}

export default withRouter(Page);
