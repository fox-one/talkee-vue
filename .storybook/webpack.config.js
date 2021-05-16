'use strict';
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /.(js|ts)$/,
        use: [
          {loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      },
      {
        test: /.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      
      {
        test: /.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }

    ],
  },
  plugins: [],
  mode: 'development',
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '../src/utils')
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".md", ".less", ".css"]
  }
};
