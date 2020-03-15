const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const templateHtml = require('./templateHtml')
const config = {
    entry: './src/index.js',
    output: {
        filename: 'build[hash].js',
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
        }]
    },
    plugins: [
            new MiniCssExtractPlugin({
            filename: "index[hash].css"
        }),
            new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './public/**/*')]
        }),
        ...templateHtml,

    ],
    devServer: {
        overlay: true,
        contentBase: path.resolve(__dirname, "./src/index.html"),
        index: 'index.html',
        port: 3333
    }
}


module.exports = config