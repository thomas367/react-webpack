const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-cheap-module-source-map',
    output: {
        publicPath: '/',
    },
    resolve: {
        modules: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'node_modules'),
            path.resolve(process.cwd(), 'assets'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.[s]css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.png|jpg|jpeg|gif|svg$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/public/'),
            publicPath: '/assets/',
        },
        historyApiFallback: true,
        port: 3000,
        open: true,
        // proxy: {
        //     '/api/*': 'http://localhost:5000'
        // }
    },
    // stats: {
    //     modules: false,
    //     usedExports: false,
    //     children: false,
    //     entrypoints: true,
    //     errors: true,
    //     warnings: true,
    //     moduleTrace: false,
    //     errorDetails: false,
    //     colors: true,
    //     performance: false,
    // },
};
