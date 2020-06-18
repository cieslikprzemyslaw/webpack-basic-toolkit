const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const settings = {
    mode: 'production',
    entry: {
        basic: './src/index.js',
    },
    output: {
        filename: "js/[name].[contenthash:8].js",
        path: path.resolve(__dirname, '/build'),
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',]
            },
            {
                test: /\.(sass | scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name][contenthash:8].[ext]',
                        outputPath: 'images',
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65,
                        },
                        optipng: {
                            optimizationLevel: 3,
                        },
                    }
                }]

            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new CopyPlugin({
            patterns: [
              { from: 'public/images', to: 'images' },
            ],
          }),
    ]
}

module.exports = settings;