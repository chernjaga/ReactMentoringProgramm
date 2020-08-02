const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathPlugins = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    mode: 'development',

    devtool: 'source-map',

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'build'),
        hot: true,
    },
    
    plugins: [
        new CaseSensitivePathPlugins(),
        new webpack.DefinePlugin({
            BROWSER_SUPPORTS_HTML5: true
        }),
        new webpack.ProvidePlugin({ // common imports for all the source
            react: 'React',
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        }),
        new ExtractTextPlugin('styles.css'),
    ],
};