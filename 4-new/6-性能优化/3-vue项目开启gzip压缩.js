/*
为了解决页面白屏时间长的问题,vue的项目可以开启gzip压缩


https://blog.csdn.net/mingtian18/article/details/128243593


webpack的配置
1. 安装一个包，然后加上配置即可
npm install --save-dev compression-webpack-plugin@1.1.2

2. 在vue.config.js里加上配置如下
module.exports = {
  chainWebpack: config => {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    if (process.env.NODE_ENV === 'production') {
        config.plugin('CompressionPlugin').use(
        	new CompressionWebpackPlugin({
            test: /\.(js|css)$/,
            threshold: 10240, // 超过10kb的文件就压缩
      			deleteOriginalAssets:true, // 不删除源文件
      			minRatio: 0.8
          })
        )
   	}
  }
}

*/ 