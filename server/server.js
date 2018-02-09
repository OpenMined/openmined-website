import { createExpressServer } from 'create-react-server';

import app from '../src/app';
import template from './template';

try {
  createExpressServer({
    port: process.env.PORT || 3000,
    app,
    template
  });
} catch (e) {
  console.error(e.stack && debug ? e.stack : e.toString());
  console.error('Use "create-react-server --help"');
  process.exit(1);
}
