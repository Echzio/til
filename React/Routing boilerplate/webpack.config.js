const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackBar = require('webpackbar');
const dotenv = require('dotenv').config({
  path: __dirname + '/.env'
});

module.exports = (env, argv) => {
  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/',
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    devServer: {
      overlay: true,
      hot: true,
      port: 9000,
      historyApiFallback: true,
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
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
              ],
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@': path.resolve(__dirname, 'src'),
      }
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
        minSize: 10000,
        maxSize: 250000,
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
      new webpack.HotModuleReplacementPlugin(),
      new webpackBar({
        color: 'blue',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(dotenv.parsed),
      }),
    ],
  };
} 