const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                            "modules": false,
                            "targets": {
                                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                            }
                        }],
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000, 
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url-loader',
                options: {
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-app',
            template: './public/index.html',
            templateParameters: {
                PUBLIC_URL: '../'
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    filter: async (resourcePath) => {
                        const reg = /\index.html$/
                        return !reg.test(resourcePath)
                    },
                }
            ]
        })
    ],
    resolve: {
        alias: {
            "@":path.resolve(__dirname,"../src")
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] // 自动判断后缀名，引入时可以不带后缀
    }
}