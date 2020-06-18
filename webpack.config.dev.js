const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = {
    mode: 'development',
    entry: {
        basic: './src/index.js',
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname,'/build'),
    },
    devServer: {
        open: 'Firefox',
        contentBase: path.resolve(__dirname,'../public'),
        host: 'localhost',
        port: 5050,
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: ['sryle-loader','css-loader',]
            },
            {
                test: /\.(sass | scss)$/,
                use: ['sryle-loader','css-loader','sass-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: [
                        ["@babel/plugin-proposal-class-properties"]
                      ]
                    }
                  },
                exclude: /node_modules/
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Here write your title',
            template: 'src/templates/template.html',
        }),
    ]
}


module.exports = settings;