const { override, addWebpackAlias } = require('customize-cra');
const fallbacks = require('./env-config');

module.exports = override(
  // Personalización utilizando addWebpackAlias
  addWebpackAlias({
    os: 'os-browserify/browser',
    crypto: 'crypto-browserify',
  }),

  // Personalización utilizando resolve.fallback
  (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        ...fallbacks,
      },
    };
    return config;
  }
);
