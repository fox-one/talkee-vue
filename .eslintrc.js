'use strict';

module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'vue/html-indent': ['warn', 2],
    'vue/html-self-closing': ['warn', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/html-quotes': ['warn', 'double', {
      'avoidEscape': true
    }],
    'vue/singleline-html-element-content-newline': ['off'],
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['warn'],
    '@typescript-eslint/array-type': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-angle-bracket-type-assertion': ['off'],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    '@typescript-eslint/consistent-type-assertions': ['warn'],
    '@typescript-eslint/no-inferrable-types': ['warn'],
    'no-console': ['error', {
      'allow': ['warn', 'error', 'info']
    }],
    'semi': ['error', 'always'],
    'prefer-spread': ['warn'],
    'no-unused-vars': ['off'],
    'no-extra-semi': ['warn'],
    'quotes': ['error', 'single'],
    'linebreak-style': ['warn', 'unix'],
    'prettier/prettier': ['warn', {
      'printWidth': 50,
      'tabWidth': 2,
      'singleQuote': true,
      'jsxSingleQuote': true,
      'semi': true,
      'trailingComma': 'none',
      'endOfLine': 'auto',
      'arrowParens': 'avoid',
      'rangeEnd': 0
    }]
  }
};