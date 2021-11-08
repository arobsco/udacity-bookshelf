const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Icons': path.resolve(__dirname, 'src/assets/icons'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Views': path.resolve(__dirname, 'src/views'),
    }
  },
};