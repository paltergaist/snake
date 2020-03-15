const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const templateHtml = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html')
    }),

    new HtmlWebpackPlugin({
        filename: "signin.html",
        template: path.resolve(__dirname, './src/html/signin.html')
    }),




];
module.exports = templateHtml;

