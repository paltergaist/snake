const paths = require('./paths');
const HtmlWebpacklPlugin = require('html-webpack-plugin');

const InfoHtmlWebpackPlugin = [
    {
        favicon: paths.src + '/image/favicon.png',
        template: paths.src + '/index.html',
        filename: 'index.html',
        minify: {
            collapseWhiteSpace: true,
        },
    },

    {
        favicon: paths.src + '/image/favicon.png',
        template: paths.src + '/pages/signin.html',
        filename: 'signin.html',
        minify: {
            collapseWhiteSpace: true,
        },
    },

    {
        favicon: paths.src + '/image/favicon.png',
        template: paths.src + '/pages/signup.html',
        filename: 'signup.html',
        minify: {
            collapseWhiteSpace: true,
        },
    },

    {
        favicon: paths.src + '/image/favicon.png',
        template: paths.src + '/pages/snake.html',
        filename: 'snake.html',
        minify: {
            collapseWhiteSpace: true,
        },
    },
];

module.exports = InfoHtmlWebpackPlugin.map(html => new HtmlWebpacklPlugin(html))