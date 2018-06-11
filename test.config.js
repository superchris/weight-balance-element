const path = require('path');

module.exports = {
  entry: './src/test-entry.js',
  mode: 'development',
  output: {
    filename: 'tests.js',
    path: path.resolve(__dirname, 'dist')
  }
};
