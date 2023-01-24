import 'webpack-dev-server';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.base';

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './.temp'),
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: '.temp',
    },
    host: '0.0.0.0',
    port: 4000,
    proxy: {
      '/react-app-vite/lib/': {
        target: 'http://localhost:5100/',
        // 証明書周りで直接アクセスは難しそう
        // target: 'https://wintyo-microfrontends.github.io/',
      },
    },
    client: {
      overlay: true,
    },
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
