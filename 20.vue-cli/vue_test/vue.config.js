const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        //路径重写
        pathRewrite: {'^/api':''},
        ws: true,
        //用于空值请求头中的host值（默认值为true）
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo':''},
        ws: true,
        changeOrigin: true
      }
    }
  }
})
