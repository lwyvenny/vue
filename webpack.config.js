//webpack的配置文件，可以配置入口出口等一些信息
//这个文件需要暴露一个对象，使用common js

const path = require("path");



module.exports={

    //入口
    entry:'./src/hello.js',

    output: {
        //指定出口的文件夹，需要是一个绝对路径
        path: path.resolve(__dirname,"./dist"),
        //打包生成的js文件的文件名叫什么。
        filename: "wodetian.js"
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
    }
}