const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    context: path.join(__dirname, 'src'),
    entry: {
        scripts: './index.ts'
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
                exclude: /node_modules/
            },
           {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                        presets: ['env']
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
            }
        ]
    },
};