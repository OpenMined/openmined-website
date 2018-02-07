import path from 'path';
import fs from 'fs';
import ua from 'useragent';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { frontloadServerRender } from 'react-frontload';
import Helmet from 'react-helmet';

import createServerStore from './store';
import Application from '../src/Application';

const injectHTML = (data, { html, head, body }) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace('</head>', `${head}</head>`);
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  return data;
};

const isBot = userAgent => {
  const agent = ua.is(userAgent);

  return (
    !agent.webkit &&
    !agent.opera &&
    !agent.ie &&
    !agent.chrome &&
    !agent.safari &&
    !agent.mobile_safari &&
    !agent.firefox &&
    !agent.mozilla &&
    !agent.android
  );
};

const universalLoader = async (req, res) => {
  const filePath = path.resolve(__dirname, '../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('BUILD ERROR', err);

      return res.status(404).end();
    } else {
      // if (!isBot(req.headers['user-agent'])) {
      //   res.send(htmlData);
      // } else {
      //   // TODO: INCLUDE WORKING CODE BELOW HERE
      // }

      const { store, history } = createServerStore(req.path);

      frontloadServerRender(() =>
        renderToString(
          <Application isServer myStore={store} myHistory={history} />
        )
      ).then(response => {
        const helmet = Helmet.renderStatic();

        console.log('RESPONSE', response);

        console.log('AND THE TITLE IS...', helmet.title.toString());

        res.send(
          injectHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            head:
              helmet.title.toString() +
              helmet.meta.toString() +
              helmet.link.toString(),
            body: response
          })
        );
      });
    }
  });
};

export default universalLoader;
