module.exports = {
  /*  process.env.NODE_ENV === 'production' ? './newgc/application/boardroom/dist/': './', */
  baseUrl: './',

  outputDir: 'room',

  indexPath: 'room.html',

  assetsDir: './static/',

  filenameHashing: true,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
  // corsUseCredentials: false,
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: (config) => {},
  productionSourceMap: false,
  // 配置高于chainWebpack中关于 css loader 的配置

  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      
      css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
        plugins: [require('postcss-px2rem')({
          remUnit: 75
        })]
      }
    }
  },

  // All options for webpack-dev-server are supported
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    open: true,

    port: 8080,

    /*  proxy: {
       '/api':{
           target: "http://192.168.31.111:80/",

           changeOrigin: true,

           ws: true
       }
     }, */

    before: app => {}
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,

  // 第三方插件配置
  pluginOptions: {}
};