var app_root = 'src';
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    app_root: app_root, // the app root folder, needed by the other webpack configs
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        __dirname + '/' + app_root + '/index.js',
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass?sourceMap',
                    'postcss'
                ],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
            }
        ],
    },
    postcss: () => {
        return [
            require('autoprefixer')
        ];
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    plugins: [
        new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
            root: __dirname + '/public',
            verbose: true,
            dry: false, // true for simulation
        }),
    ],
};
