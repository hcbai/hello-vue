const path = require('path');

const webpack = require('webpack'); //这是 启用热更新的第 2 步

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : path.join(__dirname, './src/main.js'),  //指定需要打包的文件的 路径
    output : {                      //输出文件相关配置
        path : path.join(__dirname, './dist'),  //指定打包文件输出的 目录
        filename : 'build.js'   // 指定文件输出的 文件名
    },
    // devServer:{ // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    //      //  --open --port 3000 --contentBase src --hot
    //     open: true, // 自动打开浏览器
    //     port: 3000, // 设置启动时候的运行端口
    //     contentBase: 'src', // 指定托管的根目录
    //     hot: true // 启用热更新 的 第1步
    // },
    plugins:[  // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),  // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步

        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template : path.join(__dirname, './src/index.html'),//指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename : 'index.html'  // 指定生成的页面的名称
        })
    ],
    module:{  // 这个节点，用于配置 所有 第三方模块 加载器 
        rules:[  // 所有第三方模块的 匹配规则
            {  //  配置处理 .css 文件的第三方loader 规则
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {  //处理 .less 文件
                test: /\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']
            },
            {  //处理 .scss 文件
                test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {  //处理 图片路径 的 url
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:['url-loader?limit=5000&[hash:8]-name=[name].[ext]']
            },
            {  //处理 字体文件 也是用的 url-loader 但是要与图片路径区分开来
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader'
            },
            {  //配置Babel文件 转换高级语法
                test:/\.js$/,
                use:'babel-loader',
                exclude: /node_modules/
            },
            {  // 处理 .vue 文件的 loader
                test:/\.vue$/,
                use:'vue-loader'
            }
        ]
    },
    resolve:{
        alias: {
            // "vue$" : "vue/dist/vue.js"
        }
    }
}