const { join } = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) => isDev ? [] :
  [
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx']
    })
  ];

const createConfig = ({ target, mode }) => {
  // Root of project
  const root = join(__dirname, '../');

  // Source directory
  const src = join(root, 'src');

  // Name of output bundles
  const name = '[name].js'

  // Path for compiled assets
  const dist = join(root, 'dist', target);

  const IS_SERVER = target === 'server';
  const IS_CLIENT = target === 'client';

  return {
    name: target,
    entry: ['babel-polyfill', join(src, target)],
    mode,
    devtool: mode === 'development' ? 'inline-source-map' : false,
    output: {
      path: dist,
      filename: name,
    },
    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/images/[name].[hash][ext]' }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: { filename: 'assets/fonts/[name].[hash][ext]' }
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        IS_CLIENT: JSON.stringify(IS_CLIENT),
        IS_SERVER: JSON.stringify(IS_SERVER),
        'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined')
      }),
      ...esLintPlugin(mode === 'development')
    ],
  };
}

module.exports = {
  createConfig,
};
