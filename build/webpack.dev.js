const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')
//引入webpack插件
const webpack = require('webpack')

const devConfig = {
    mode: 'development',//开发时设置为development的环境

    devtool: 'eval',
    // devServer配置
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        hot: true
    },

    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    /*不加下面这一段话会报错： 
    [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
    Either pre-compile the templates into render functions, or use the compiler-included build. 
    因为Vue 会打包生成三个文件:
    runtime only 的文件 vue.common.js
    compiler only 的文件 compiler.js
    runtime + compiler 的文件 vue.js
    而默认导出的是 vue.common.js*/
    /* resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        alias: {
            'vue': '@vue/runtime-dom'
        }  
    } */
}

module.exports = merge(baseConfig, devConfig)