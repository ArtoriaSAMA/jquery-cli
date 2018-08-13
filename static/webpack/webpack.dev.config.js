let basic = require('./webpack.config.js')('dev');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

basic.plugins.push(new webpack.HotModuleReplacementPlugin());

basic.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
}));

module.exports = Object.assign({
    output: {
        path: '/dist/',
        filename: 'main.js',
        publicPath: '/',
        chunkFilename: '[name].chunk.js',
    },
    watch: true,
    cache: true,
    devServer: {
        historyApiFallback: true, //
        stats: { colors: true }, //控制台文字颜色
        inline: true, //这里配置启动命令可以不添加--inline
        hot: true, //这里配置启动命令可以添加--hot
    }
}, basic);