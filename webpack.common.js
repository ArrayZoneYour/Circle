const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('circle.min.css');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /.less$/,
                include: /App\.less/,
                use: extractCSS.extract([
                    { loader: 'css-loader' , options: { localIdentName: "[local]___[hash:base64:5]", importLoaders: 1 }},
                    { loader: 'less-loader', options: { javascriptEnabled: true }}
                ])
            },
            {
                test: /\.less$/,
                exclude: /App\.less/,
                use: extractCSS.extract([
                    { loader: 'css-loader' , options: { modules: true, localIdentName: "[local]___[hash:base64:5]", importLoaders: 1 }},
                    { loader: 'less-loader', options: { javascriptEnabled: true }}
                ])
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ])
            },
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.mjs', '.js', '.jsx'],
        alias: {
            '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icon.ts')
        }
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "circle.js"
    },
    plugins: [
        extractCSS,
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
};