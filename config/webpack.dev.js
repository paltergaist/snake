const paths = require('./paths')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const webpackDev = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'css-loader', options: {sourceMap: true, importLoaders: 1},
                    },
                    {
                        loader: 'postcss-loader', options: {sourceMap: true},
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: paths.src.pages,
        watchContentBase: true,
        open: true,
        compress: true,
        hot: true,
        port: 9999,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}

module.exports = merge(common, webpackDev)