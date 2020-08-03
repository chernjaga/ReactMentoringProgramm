const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    devtool: 'source-map',

    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'build'),
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
    ]
};