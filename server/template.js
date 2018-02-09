import Helmet from 'react-helmet';

const injectHTML = (data, { html, title, meta, body }) => {
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return data;
};

export default ({ template, html, error }) => {
  const helmet = Helmet.renderStatic();

  console.log('AND THE TITLE IS...', helmet.title.toString());

  return injectHTML(template, {
    html: helmet.htmlAttributes.toString(),
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    body: html
  });
};
