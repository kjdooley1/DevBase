const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './client/index.html',
    }),
  ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        exclude: /node_modules/,
        // use: [
        //   MiniCssExtractPlugin.loader,
        //   {
        //     loader: 'css-loader'
        //   },
        //   {
        //     loader:'sass-loader'
        //   },
        // ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
