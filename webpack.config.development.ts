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
      '/react-app/': {
        target: 'http://localhost:4173/',
        bypass: (req, res, proxyOptions) => {
          // 一番最後に.jsなど拡張子がついている場合はproxyする
          if (/\.[a-z]+$/.test(req.path)) {
            console.log('proxy', req.path);
            return null;
          }
          // そうでない場合はトップページをfallbackで返す
          return '/';
        },
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
