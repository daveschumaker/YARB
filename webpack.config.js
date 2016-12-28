const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');    // Generates index.html
const merge = require('webpack-merge');
const path = require('path');
const validate = require('webpack-validator');

const parts = require('./webpack-utils/parts');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
    scss: path.join(__dirname, 'scss')
};

const common = {
    context: PATHS.app,
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new CleanPlugin([PATHS.build]),
        new HtmlWebpackPlugin({
            title: 'YARB - Yet Another React Boilerplate',
            appMountId: 'app',
            template: PATHS.app + '/templates/index.html'
        })
    ],
    resolve: {
        root: path.join(__dirname),
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            'app': 'app',
            'config': 'config',
            'images': 'app/images',
            'scss': 'scss',
            'test': ' test'
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need
                // something more custom, pass a path to it.
                // I.e., babel?cacheDirectory=<path>
                loaders: ['babel?cacheDirectory'],
                // Parse only app files! Without this it will go through
                // the entire project. In addition to being slow,
                // that will most likely result in an error.
                include: PATHS.app
            }]
        }
    }

    var config;

    // Detect how npm is run and branch based on that
    switch(process.env.npm_lifecycle_event) {
        case 'build':
        config = merge(
            common,
            parts.minify(),
            parts.setupCSS(PATHS.scss)
        );
        break;
        default:
        config = merge(
            common,
            {
                devtool: 'source-map'
            },
            parts.setupCSS(PATHS.scss),
            parts.devServer({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
    }

    module.exports = validate(config);
