const development = require('./config.development');
const production = require('./config.production');

const config = development;

if (process.env.NODE_ENV === 'production') {
  Object.assign(config, development, production);
}

console.log('config:', config);

module.exports = config;
