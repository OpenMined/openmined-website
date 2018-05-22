import 'es6-promise/auto';
import 'isomorphic-fetch';
import Express from 'express';
import forceDomain from 'forcedomain';
import unless from 'express-unless';
import {
  createExpressMiddleware,
  skipRequireExtensions
} from 'create-react-server';

import app from '../src/app';
import template from './template';

try {
  skipRequireExtensions();

  const express = Express();
  const port = process.env.PORT || 3000;

  if (process.env.HOST_NAME) {
    express.use(
      forceDomain({
        hostname: process.env.HOST_NAME,
        protocol: process.env.FORCE_SSL === 'true' ? 'https' : 'http'
      })
    );
  }

  // NOTE: Currently this just redirects all former blog and dig posts to the new URL
  // It will be a glorious day that we don't need this anymore...
  express.get('*', (req, res, next) => {
    if (req.path.indexOf('/blog') === -1 && req.path.indexOf('/digs') === -1) {
      return next();
    } else {
      let params = req.path.split('/');
      params = params.filter(n => n !== '' && n !== '[object%20Object]');

      if (params.length === 1) {
        // If we're just at the root of blog or digs
        res.redirect(301, 'https://' + params[0] + '.openmined.org');
      } else if (params.length === 2) {
        // If we're on a blog post
        res.redirect(
          301,
          'https://' + params[0] + '.openmined.org/' + params[1]
        );
      } else if (params.length === 3) {
        // If we're on a tag or category
        res.redirect(
          301,
          'https://' + params[0] + '.openmined.org/tag/' + params[2]
        );
      }

      // We can't match - screw you guys, I'm going home.
      res.redirect(301, 'https://www.openmined.org/');
    }
  });

  const crsMiddleware = createExpressMiddleware({
    port: process.env.PORT || 3000,
    app,
    template,
    debug: true
  });

  crsMiddleware.unless = unless;

  // TODO: This is a hack.  We're having a weird issue with loading an object which is related to how CRA bundles images.  This is yet to be solved and understood better - any assistance would be immensely helpful.
  express.use(
    crsMiddleware.unless(
      req =>
        req.originalUrl.includes('[object%20Object]') ||
        req.originalUrl.includes('sw-precache')
    )
  );

  express.use(Express.static(process.cwd() + '/build'));

  express.listen(port, err => {
    if (err) throw err;

    console.log('Listening at port ' + port);
  });
} catch (e) {
  console.error(e.stack);
  process.exit(1);
}
