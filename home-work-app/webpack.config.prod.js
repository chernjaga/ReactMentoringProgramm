const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            }
        }),
    ],
};