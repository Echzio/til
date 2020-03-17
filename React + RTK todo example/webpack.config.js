const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBar = require('webpackbar');

module.exports = (env, argv) => {
  return {
    entry: ['@babel/polyfill', 'react-hot-loader/patch', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '',
    },
    devServer: {
      overlay: true,
      hot: true,
      port: 9000,
      contentBase: [__dirname + '/public'],
      historyApiFallback: true,
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpackBar({
        color: 'blue',
      }),
    ],
  };
}