const path = require('path');
const os = require("os");
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
function resolve(dir) {
  return path.join(__dirname, dir);
}

function getNetworkIp() {
  let needHost = ''; // 打开的host
  try {
    // 获得网络接口列表
    let network = os.networkInterfaces();
    for (let dev in network) {
      let iface = network[dev];
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          needHost = alias.address;
        }
      }
    }
  } catch (e) {
    needHost = 'localhost';
  }
  return needHost;
}

let devPublicPath = `//${getNetworkIp()}:${process.env.VUE_APP_MicroPort}`
let proPublicPath = `/${process.env.VUE_APP_MICRONAME}/`

module.exports = {
  lintOnSave: false,
  outputDir: `${process.env.VUE_APP_MICRONAME}`,
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: process.env.NODE_ENV === "production" ? proPublicPath : devPublicPath,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: process.env.VUE_APP_MicroPort,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':'*'

    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      require('unplugin-auto-import/webpack').default({
        resolvers: [ElementPlusResolver({
          importStyle: 'less',
        })]
      }),
      require('unplugin-vue-components/webpack').default({
        resolvers: [ElementPlusResolver({
          importStyle: 'less',
        })]
      })
    ],
    output: {
      //把子应用打包成 umd 库格式
      library: '[name]',
      filename: '[name].js',
      libraryTarget: 'umd',
      globalObject: 'window',
    },
  },
};
