const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('circle.min.css');

module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
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
    resolve: { extensions: ['*', '.ts', '.tsx', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "circle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public/"),
        port: 8888,
        publicPath: "http://localhost:8888/dist/",
        hotOnly: true,
        overlay: true
    },
    plugins: [
        extractCSS,
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ]
};