'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    '@babel/preset-env',
    'babel-preset-vue',
    '@babel/preset-typescript'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-private-property-in-object', { "loose": true }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-proposal-class-properties', { "loose": true }]
  ];

  const env = {
    es: {
      presets: [
        [
          '@babel/preset-env',
          { modules: false }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          { useESModules: true }
        ]
      ]
    }
  };

  return {
    presets,
    plugins,
    env
  };
};
