const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './render/src/main.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: '/node_modules/',
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        }, {
            test: /\.vue$/,
            use: 'vue-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                esModule: false,
                // name: '[name].[ext]',
                outputPath: './imgs',
                publicPath: './imgs'
            },
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            nodeModules: process.env.NODE_ENV !== 'production'
                ? path.resolve(__dirname, '../node_modules')
                : false
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}