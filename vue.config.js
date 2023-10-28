const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// // 开发环境代理配置
// const devProxy = {
//   '/api': {
//     target: 'http://localhost:3001/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '',
//     },
//   },
//   '/upload': {
//     target: 'http://localhost:3001/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/upload': '/upload',
//     },
//   },
// };
//
// // 生产环境代理配置
// const prodProxy = {
//   '/api': {
//     target: 'http://youxioabei.top:3001/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '',
//     },
//   },
//   '/upload': {
//     target: 'http://youxiaobei.top:3001/',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/upload': '/upload',
//     },
//   },
// };
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
console.log('process.env.VUE_APP_BASE_API',process.env.VUE_APP_BASE_API)
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: devProxy
  //   // proxy: {
  //   //   '/api': {
  //   //     // 要代理的服务器地址
  //   //     target: 'http://localhost:3001/',
  //   //     changeOrigin: true, // 是否跨域
  //   //     pathRewrite: {
  //   //       '^/api': '',
  //   //     },
  //   //   },
  //   //   '/upload': {
  //   //     target: 'http://localhost:3001/',
  //   //     changeOrigin: true,
  //   //     pathRewrite: {
  //   //       '^/upload': '/upload',
  //   //     },
  //   //   },
  //   // },
  // },
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
})
