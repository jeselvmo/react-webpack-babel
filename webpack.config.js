const path = require('path');
const webpack = require('webpack'); // webpack核心
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将CSS提取出来，而不是和js混在一起
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // 对CSS进行压缩
const TerserPlugin = require('terser-webpack-plugin');
const webpackbar = require('webpackbar'); // 进度条

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'cheap-module-source-map',
  entry: [
    './src/index.js', // your app's entry point
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.less'],
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
            ['@babel/plugin-transform-runtime'], //
            ['import', { libraryName: 'antd', style: true }],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        include: /(antd|antd-mobile)/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#409eff',
                  'link-color': '#409eff',
                  'border-radius-base': '4px',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src/styles')],
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.less$/,
        exclude: [/(antd|antd-mobile)/, path.resolve(__dirname, 'src/styles')],
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'images',
              outputPath: 'images',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    hot: true,
    proxy: [
      {
        context: ['/cc', '/Net'],
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static' }],
    }),
    new webpackbar(), // 打包时美化进度条
    new webpack.DefinePlugin({
      'process.env': 'prod',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css', // 生成的文件名
      chunkFilename: 'css/[name].[chunkhash:8].chunk.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = webpackConfig;
