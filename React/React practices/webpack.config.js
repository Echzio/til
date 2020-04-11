const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNested = require('postcss-nested');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
const webpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    overlay: true,
    hot: true,
    port: 9000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'astroturf/loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'astroturf/css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssPresetEnv({
                  stage: 0,
                  autoprefixer: {
                    grid: true,
                  },
                }),
                postcssNested,
                postcssNormalize,
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpackBar({
      color: 'red',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
