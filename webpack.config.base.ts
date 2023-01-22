import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
  target: 'web',
  entry: {
    index: [path.resolve(__dirname, './src/scripts/main.tsx')],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, './src/scripts/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/html/index.html'),
      hash: true,
      inject: true,
    }),
  ],
};

export default config;
