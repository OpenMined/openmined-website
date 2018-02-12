import 'es6-promise/auto';
import 'isomorphic-fetch';
import { createExpressServer } from 'create-react-server';

import app from '../src/app';
import template from './template';

try {
  createExpressServer({
    port: process.env.PORT || 3000,
    app,
    template,
    debug: true
  });
} catch (e) {
  console.error(e.stack);
  process.exit(1);
}
