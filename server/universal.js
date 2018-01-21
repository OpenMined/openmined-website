import path from 'path';
import fs from 'fs';
import ua from 'useragent';
import puppeteer from 'puppeteer';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createServerStore from './store';

import App from '../src/containers/app';

const PORT = process.env.PORT || 3000;

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }) => {
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
  // try {
  //   console.log('NOW ENTERING HERE', 1);
  //   const browser = await puppeteer.launch({ headless: true });
  //   const page = await browser.newPage();
  //
  //   console.log('NOW ENTERING HERE', 2);
  //
  //   await page.setUserAgent(
  //     'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
  //   );
  //
  //   console.log('NOW ENTERING HERE', 3);
  //
  //   await page
  //     .goto('http://localhost:' + PORT + req.originalUrl, {
  //       waitUntil: 'networkidle0'
  //     })
  //     .then(response => {
  //       console.log('NOW ENTERING HERE', 4, response);
  //     });
  //
  //   const html = await page.evaluate(() => {
  //     return document.documentElement.innerHTML;
  //   });
  //
  //   console.log('NOW ENTERING HERE', html);
  //
  //   res.send(html);
  // } catch (e) {
  //   res.send('ERROR');
  // }
  // if (!isBot(req.headers['user-agent'])) {
  //   const filePath = path.resolve(__dirname, '../build/index.html');
  //
  //   fs.readFile(filePath, 'utf8', (err, htmlData) => {
  //     if (err) {
  //       console.error('Read error', err);
  //
  //       return res.status(404).end();
  //     }
  //
  //     res.send(htmlData);
  //   });
  // } else {
  //   try {
  //     const browser = await puppeteer.launch({ headless: true });
  //     const page = await browser.newPage();
  //
  //     await page.setUserAgent(
  //       'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
  //     );
  //
  //     await page.goto('http://localhost:' + PORT + req.originalUrl, {
  //       waitUntil: 'networkidle0'
  //     });
  //
  //     const html = await page.evaluate(() => {
  //       return document.documentElement.innerHTML;
  //     });
  //
  //     res.send(html);
  //   } catch (e) {
  //     res.send('ERROR');
  //   }
  // }

  console.log('Are we a bot?', isBot(req.headers['user-agent']));

  // Load in our HTML file from our build
  const filePath = path.resolve(__dirname, '../build/index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Create a store and sense of history based on the current path
    const { store, history } = createServerStore(req.path);

    // Render App in React
    const routeMarkup = renderToString(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={App} />
        </ConnectedRouter>
      </Provider>
    );

    // Let Helmet know to insert the right tags
    const helmet = Helmet.renderStatic();

    console.log('META TAGS', helmet.meta.toString());

    // Form the final HTML response
    const html = prepHTML(htmlData, {
      html: helmet.htmlAttributes.toString(),
      head:
        helmet.title.toString() +
        helmet.meta.toString() +
        helmet.link.toString(),
      body: routeMarkup
    });

    // Up, up, and away...
    res.send(html);
  });
};

export default universalLoader;
