let basic = require('./webpack.config.js')('release');
var webpack = require('webpack');
let path = require("path");

let root = path.join(__dirname + '/../../');

basic.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

module.exports = Object.assign({
    output: {
        path: path.join(root, '/dist/'),
        filename: '[name].[hash].js',        
        publicPath: '/dist/',
        chunkFilename: '[name].chunk.js',
    }
}, basic);