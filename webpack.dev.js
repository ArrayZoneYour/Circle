const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
   mode: "development",
   devtool: 'inline-source-map',
   devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public/"),
    port: 8888,
    publicPath: "http://localhost:8888/dist/",
    hotOnly: true,
    overlay: true
   },
});
