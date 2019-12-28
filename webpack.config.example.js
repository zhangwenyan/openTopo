const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: ['./example/index.js'],
    plugins: [
        new HtmlWebpackPlugin({
            title: '页面标题',
            template: './example/index.html'
        }),
        new CleanWebpackPlugin()

    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        //port:8080,
        open: true,//自动打开浏览器
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: './example',
                            name: 'static/[path][name].[ext]'
                        }
                    }

                ]
            }
        ]
    }
};