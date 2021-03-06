'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    '@babel/preset-env',
    'babel-preset-vue',
    ['@vue/babel-preset-jsx', { compositionAPI: true }],
    '@babel/preset-typescript',
    'babel-preset-typescript-vue3'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }]
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
        ['@babel/plugin-transform-runtime',{
          useESModules: true
        }],
        ['@babel/plugin-proposal-decorators', {
          legacy: true
        }],
        ['@babel/plugin-proposal-class-properties', {
          loose: true
        }],
        ['@babel/plugin-proposal-private-property-in-object', {
          loose: true
        }],
        ['@babel/plugin-proposal-private-methods', {
          loose: true
        }]
      ]
    }
  };

  return {
    presets,
    plugins,
    env
  };
};
