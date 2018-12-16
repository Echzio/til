const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: 'awesome.js',
        publicPath: 'dist/js/',
    },
    devServer: {
        overlay: true,     
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers: ['ie >=8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']        
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}