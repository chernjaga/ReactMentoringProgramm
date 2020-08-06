const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const CaseSensitivePathPlugins = require('case-sensitive-paths-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        scripts: './index.ts'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        modules: [path.resolve(__dirname), 'node_modules']
    },

    module: {
        rules: [
           {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                // Prefer `dart-sass`
                                implementation: require('sass')
                            }
                        }
                    ],
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader?name=/image/[name].[ext]"
            },
        ]
    },
    plugins: [
        new CaseSensitivePathPlugins(),
        new webpack.DefinePlugin({
            BROWSER_SUPPORTS_HTML5: true
        }),
        new webpack.ProvidePlugin({ // common imports for all the source
            'React': 'react',
            '_': 'lodash'
        }),
        new ExtractTextPlugin('styles.css'),
    ]
};