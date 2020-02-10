const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpackBar = require('webpackbar');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

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
      },],
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
      }
    },
    plugins: [
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