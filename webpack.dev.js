const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    entry: {
        app: ['vue', './src/app.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        host: "192.168.37.194",
        hot: true,
    },
    devtool: 'source-map',
})
