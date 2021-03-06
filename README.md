# vue_TodoList
vue的小项目
|── build                     构建服务和webpack配置
    |—— webpack.base.js    webpack基本通用配置
    |—— webpack.dev.js     webpack开发环境配置
    |—— webpack.prod.js    webpack生产环境配置
├── dist                     项目打包文件存放目录
|——node_modules              是安装node后用来存放用包管理工具下载安装的包的文件夹。比如webpack、gulp、grunt这些工具。 
├── src                      项目目录
    |——assets                  静态资源
	|—— components            页面组件目录
    |—— App.vue                vue实例入口
|—— main.js                 项目构建入口
├── babel.config.json           babel配置文件
├── index.html                项目入口文件
├── package-lock.json的作用:就是锁定安装时的包的版本号，以保证其他人在npm install时大家的依赖能保证一致。
├── package.json              项目配置文件
