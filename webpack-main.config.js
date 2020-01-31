const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './app/app.ts',
    target: 'electron-main',
    devtool: 'inline-source-map',
    output: {
        filename: 'app.bundle.js',
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
                name: '[name].[ext]',
                outputPath: './imgs',
                publicPath: './imgs'
            },
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
}