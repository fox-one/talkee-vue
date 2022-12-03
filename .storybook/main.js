const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    const cssLoaders = ["style-loader", "css-loader"];

    config.module.rules.push({
      test: /\.sass$/,
      use: [
        ...cssLoaders,
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sassOptions: {
              indentedSyntax: true
            },
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        ...cssLoaders,
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            sassOptions: {
              indentedSyntax: false
            },
          }
        }
      ]
    });

    config.module.rules.push( {
      test: /.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "babel-loader?retainLines=true"
        }
      ]
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        allowTsInNodeModules: true,
        appendTsSuffixTo: [/.vue$/]
      }
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@apis': path.resolve(__dirname, '../src/apis'),
      '@utils': path.resolve(__dirname, '../src/utils')
    }

    config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ".md", ".scss", ".css", ".sass"]

    // Return the altered config
    return config;
  }
}