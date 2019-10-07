const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].js"
    },

    module: {
        rules: [
            {test: /\.(sass|scss)$/,use:['style-loader','css-loader','sass-loader']},
            {test: /\.(png|jpg|gif)$/,use:['file-loader']},
            {test: /\.vue$/,use:['vue-loader']}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./public/index.html')
        }),
        new VueLoaderPlugin(),
    ]
}