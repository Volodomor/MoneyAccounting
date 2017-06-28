var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: {
        app: ['./index.tsx']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: '[name].bundle.js?v=[hash]'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader?transpileOnly=true' } //forSpreedup: ts-loader?transpileOnly=true
        ],
    },
    resolve: {
        extensions: ['', '.tsx', '.js']
    },
    plugins: [
        failPlugin,
        /*new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),*/
        /*new ExtractTextPlugin("css/main.css", { allChunks: false }),*/
        /*new HtmlWebpackPlugin({
            title: "Учет расходов и доходов",
            filename: "../Views/Shared/index.cshtml",
            favicon: path.join(__dirname, "files/favicon.ico"),
            template: path.join(__dirname, "files/index.ejs")
        })*/
    ]
};