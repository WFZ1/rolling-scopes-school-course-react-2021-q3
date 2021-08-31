const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = common.createConfig({
  target: 'client',
  mode: 'development'
});

module.exports = {
  ...config,

  output: {
    ...config.output,

    assetModuleFilename: 'assets/[name].[hash][ext]',
    clean: { keep: /assets\// },
    publicPath: 'development' ? '/' : ''
  },
  module: {
    ...config.module,

    rules: [
      ...config.module.rules,

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new CopyPlugin({ patterns: [{ from: './public' }]}),
  ],
};
