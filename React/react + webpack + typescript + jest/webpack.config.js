const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, { mode }) => {
  const config = {
    target: 'web',
    entry: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      'react-hot-loader/patch',
      './src/index.tsx',
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/[name].js',
      publicPath: '',
    },
    devServer: {
      overlay: true,
      hot: true,
      port: 9000,
      contentBase: [`${__dirname}/public`],
      historyApiFallback: true,
    },
    devtool: mode === 'development' ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/i,
          use: [
            mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'public/assets',
            to: 'assets',
            globOptions: {
              gitignore: true,
            },
          },
          {
            from: 'public/root',
            to: '',
            globOptions: {
              gitignore: true,
            },
          },
        ],
      }),
    ],
  };

  if (mode === 'production') {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          parallel: true,
          terserOptions: {
            mangle: {
              safari10: true,
            },
            format: {
              comments: false,
            },
          },
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
    };
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: './assets/styles/[name].css',
      }),
      new PreloadWebpackPlugin({
        rel: 'preload',
        include: 'allAssets',
        fileBlacklist: [/\.map$/, /hot-update\.js$/],
      }),
      new PreloadWebpackPlugin({
        rel: 'prefetch',
        include: 'asyncChunks',
      }),
    );
  }

  return config;
};
