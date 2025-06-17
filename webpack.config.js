const path = require('path');

module.exports = {
  // ...other config
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // adjust if your 'src' path is different
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // ensure these are included
  },
};
