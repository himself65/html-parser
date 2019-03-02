const path = require('path')

// this file is for WebStorm webpack loader which can display correct code highlighting
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../', 'src')
    }
  }
}
