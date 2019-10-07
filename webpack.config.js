//webpack的配置文件，可以配置入口出口等一些信息
//这个文件需要暴露一个对象，使用common js

const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports={

    //单入口
    // entry:'./src/hello.js',

    // 多入口
    // entry:{
    //  index:'./src/index.js',
    //  hello:'./src/hello.js'
    // },
    entry :"./src/index.js",

    output: {
         //指定出口的文件夹，需要是一个绝对路径
        path: path.resolve(__dirname,"./dist"),
        //打包生成的js文件的文件名叫什么。
        // filename: "wodetian.js"
        //使用hash占位符来处理缓存问题
        filename: "[name]-[hash].js"
    },


    module:{
        //配置转换器规则
        rules: [
            {
                //制定某种类型的文件
                test: /\.css/,
                //制定使用的转换器 css -> css-loader ->style-loader
                use: [
                    'style-loader','css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    //插件
    plugins: [
        new htmlWebpackPlugin({
            //设置模板文件的路径
            template: path.resolve(__dirname,'./public/index.html')
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from : path.resolve(__dirname,'./public')}
        ])
    ]
}