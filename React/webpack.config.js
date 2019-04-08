const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'awesome.js',
        publicPath: '',
    },
    devServer: {
        overlay: true,
        hot: true,
        port: 9000
    },
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
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
                            postcssPresetEnv({
                                state : 0,
                                browsers: ['last 4 version'],
                                autoprefixer: { grid: true }
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
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
        test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      }, 
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    optimization: {
        minimizer: [new TerserPlugin({
        cache: true,
        parallel: true,
        }
    )],
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[ext]',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
