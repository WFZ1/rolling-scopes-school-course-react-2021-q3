const common = require('./webpack.common.js');

const config = common.createConfig({
  target: 'server',
  mode: 'development'
});

module.exports = {
  ...config,

  target: 'node',
  module: {
    ...config.module,

    rules: [
      ...config.module.rules,

      {
        test: /\.css$/,
        use: 'null-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: 'null-loader'
      }
    ]
  },
  externals: {
    'express': 'commonjs express',
    'react': 'commonjs react',
    'react-dom/server': 'commonjs react-dom/server',
    'react-router': 'commonjs react-router',
    'react-router-dom': 'commonjs react-router-dom'
  },
};
