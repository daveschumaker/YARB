const HtmlWebpackPlugin = require('html-webpack-plugin');    // Generates index.html
const merge = require('webpack-merge');
const path = require('path');
const validate = require('webpack-validator');

const parts = require('./lib/parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
      config = merge(
        common,
        // {
        //     devtool: 'cheap-eval-source-map',
        // },
        parts.minify(),
        parts.setupCSS(PATHS.app)
      );
    break;
  default:
      config = merge(
        common,
        {
            devtool: 'source-map'
        },
        parts.minify(),
        parts.setupCSS(PATHS.app),
        parts.devServer({
          // Customize host/port here if needed
          host: process.env.HOST,
          port: process.env.PORT
        })
      );
}

module.exports = validate(config);
