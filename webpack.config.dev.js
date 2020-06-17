const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = {
    mode: 'development',
    entry: {
        basic: './src/index.js',
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: path.resolve(__dirname,'/build'),
    },
    devServer: {
        open: 'Firefox',
        contentBase: path.resolve(__dirname,'/public'),
        host: 'localhost',
        port: 5050,
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Here write your title',
            template: 'src/template.html',
        }),
    ]
}


module.exports = settings;