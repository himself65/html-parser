const path = require('path')

// this file is for WebStorm webpack loader which can display correct code highlighting
module.exports = {
  resolve: {
    extensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
    alias: {
      '@': path.resolve(__dirname, '../', 'src')
    }
  }
}
