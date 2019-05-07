module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: [{ loader: 'raw-loader' }]
      }
    ]
  }
};
