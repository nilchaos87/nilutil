const pkg = require('./package.json');
const fs = require('fs');
const babelSettings = JSON.parse(fs.readFileSync('.babelrc'));

module.exports = {
  entry: './src/index',
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    library: pkg.name,
    libraryTarget: 'umd',
    path: __dirname,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelSettings
          }
        ]
      }
    ]
  }
};
