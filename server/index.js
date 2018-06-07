const md5File = require('md5-file');
const path = require('path');

// Ignore those pesky styles
const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg'];

register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  const ext = extensions.find(f => filename.endsWith(f));
  if (!ext) return ignoreStyles.noOp();

  const hash = md5File.sync(filename).slice(0, 8);
  const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);
  mod.exports = `/static/media/${bn}`;
});

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

require('./server');
