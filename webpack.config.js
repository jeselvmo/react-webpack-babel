/* eslint-disable indent,import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const config = require('./config');

const prod = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: prod ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.jsx', // your app's entry point
  ],
  output: {
    publicPath: config.publicPath,
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public\/)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-proposal-object-rest-spread',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['import', { libraryName: 'antd', style: true }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src/styles')],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/pages')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[folder]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.less$/,
        include: /(antd|antd-mobile)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: config.theme,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ['file-loader?limit=1024&name=[hash].[ext]&outputPath=images/'],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: ['file-loader?limit=1024&name=[hash].[ext]&outputPath=fonts/'],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    disableHostCheck: true,
    ...config.devServer,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    }),
    new CopyWebpackPlugin([{ from: 'static' }]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      title: config.title,
      inject: true,
    }),
  ].concat(
    prod
      ? []
      : [
          // Development only plugins
          new webpack.HotModuleReplacementPlugin(),
          // Catch errors with style
          new ErrorOverlayPlugin(),
        ]
  ),
};

module.exports = webpackConfig;
