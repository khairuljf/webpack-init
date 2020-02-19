const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],

    output: {
        path: path.join(__dirname, 'public'),
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            /*
            your other rules for JavaScript transpiling go in here
            */
            { // sass / scss loader for webpack
                test:  /\.s?css$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: './dist/[name].bundle.css',
            allChunks: true,
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true,
    }
};