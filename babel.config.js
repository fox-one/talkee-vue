'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    '@babel/preset-env',
    'babel-preset-vue',
    '@babel/preset-typescript'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime'
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
