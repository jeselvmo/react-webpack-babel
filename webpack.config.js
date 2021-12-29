const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  // mode: prod ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.js', // your app's entry point
  ],
  output: {
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
            ['@babel/plugin-transform-runtime'], //
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
        include: /(antd|antd-mobile)/,
        use: [
          'style-loader',
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
      // {
      //   test: /\.less$/,
      //   include: [path.resolve(__dirname, 'src/styles')],
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      // },
      {
        test: /\.less$/,
        // include: [path.resolve(__dirname, 'src')],
        // exclude: [path.resolve(__dirname, 'src/styles')],
        exclude: /(antd|antd-mobile)/,
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
    static: {
      directory: path.join(__dirname, 'public'),
    },
    allowedHosts: 'all', // 'auto' | 'all' [string]
    client: {
      logging: 'log', // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
      overlay: true,
      progress: true,
    },
    compress: true,
    hot: true,
    host: '0.0.0.0',
    port: '3050',
    proxy: [
      {
        context: ['/cc'],
        // target: 'http://172.16.0.14:17545',
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
      {
        context: ['/Net'],
        target: 'https://cs.ljlx.com/api/',
        secure: false,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = webpackConfig;
