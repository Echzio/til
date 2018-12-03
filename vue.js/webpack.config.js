//для путей
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // вход
    entry: {
        main: './src/index.js'
    },
    // выход
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: 'main.js',
        // относительная ссылка на итоговый файл
        publicPath: 'dist/',
    },
    devServer: {
        // для показа ошибки вне консоли
        overlay: true,
    },
    module: {
        rules: [{               
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({           
            filename: '../css/style.css',
        })
    ]
}