#vue-webpack 的使用

- public 静态资源文件，里面存放着index.html这个页面的模板，还可以存放一些不需要webpack去打包处理的静态资源
    -index.html 页面模板文件
    
- src 源代码文件夹，里面存放的东西都需要被webpack处理
    -assets 静态资源文件 css、js、jpg   
    - App.vue   Vue的单文件组件，一般使用它作为万年老二组件，这种类型的文件需要通过转换器进行转换，vue-loader
    - index.js  项目入口 js文件
    
   - .gitignore  忽略文件
   
   
## 项目依赖包
    1.webpack
    2.webpack-cli
    3.css-loader
    4.style-loader
    5.sass-loader
    6.node-sass
    7.file-loader
    8.html-webpack-plugin
    9.vue
    
    
##通过webpack使用vue，template不好使
    vue 的版本构建问题
    
    requi('xxx'),import xxx from 'xxx'
    以上两种代码引入的第三方模块到底引入的是个啥
    
    main指定的是common js
    module 指定的是es
    
    按使用环境来说有3大种 
        1.UMD
        2.Common js
        3.ESM
        
    按运行方式来说有两大种
        1.只包含运行时版本 ，代码只能使用render
        2.完整版   可以使用render ，也可以使用template