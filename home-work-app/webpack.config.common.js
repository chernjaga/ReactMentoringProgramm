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
        path: path.join(__dirname, 'build')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
        modules: [path.resolve(__dirname), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                }
            },
           {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx', 'plugin-transform-typescript', 'transform-arrow-functions'],
                        presets: ['env', 'react', 'typescript']
                    }
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
            react: 'React',
            _: 'lodash'
        }),
        new ExtractTextPlugin('styles.css'),
    ]
};