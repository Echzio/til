const path = require('path');

module.exports = {

    //entry point
    entry: {
        main: './src/index.js'
    },
    // output
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: 'main.js',
        publicPath: 'dist/js/'
    },
    // sarvar
    devServer: {
        overlay: true
    }
}