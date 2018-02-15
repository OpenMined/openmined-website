import 'es6-promise/auto';
import 'isomorphic-fetch';
import Express from 'express';
import forceDomain from 'forcedomain';
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
        hostname: process.env.HOST_DOMAIN,
        protocol: process.env.FORCE_SSL === 'true' ? 'https' : 'http'
      })
    );
  }

  express.use(
    createExpressMiddleware({
      port: process.env.PORT || 3000,
      app,
      template,
      debug: true
    })
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
