const paths = require('./paths')
const  {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('./HtmlWebpackPlugin')

module.exports = {
    entry: [paths.src + '/index.js'],
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [new CleanWebpackPlugin(), ...HtmlWebpackPlugin],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],

            },

            {
                test: /\.css$/,
                use: ['style-loader'],
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[paths][name].[ext]',
                    context: 'src',
                }
            },

            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[paths][name].[ext]',
                    context: 'src'
                },
            },
        ],
    },
};