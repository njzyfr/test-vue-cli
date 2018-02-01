/*eslint-disable*/
const remoteIP = 'localhost:3333';
module.exports = {
  devServer: {
    port: 8888,
    proxy: {
      '/api*': {
        target: `http://${remoteIP}`,
      },
    },
  }
};
