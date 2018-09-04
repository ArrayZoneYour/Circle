const path = require("path");
const webpack = require("webpack");

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
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' , options: { localIdentName: "[local]___[hash:base64:5]", importLoaders: 1 }},
                    { loader: 'less-loader', options: { javascriptEnabled: true }}
                ]
            },
            {
                test: /\.less$/,
                exclude: /App\.less/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' , options: { modules: true, localIdentName: "[local]___[hash:base64:5]", importLoaders: 1 }},
                    { loader: 'less-loader', options: { javascriptEnabled: true }}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
        ]
    },
    resolve: { extensions: ['*', '.ts', '.tsx', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
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
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ]),
    ]
};