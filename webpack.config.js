var path = require("path");

module.exports = {
  entry: './src/myLibrary',
  output: {
    path: './lib',
    filename: 'MyLibrary.js',
    library: 'MyLibrary',
    libraryTarget: 'var'
  }
}