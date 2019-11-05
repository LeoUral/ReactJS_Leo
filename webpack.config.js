const path = require("path");// ++
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: `${__dirname}/static_src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: 'app.js',
    },

    module: {
        rules: [{
            test: /\.(jx|jsx)$/,
            // include: `${__dirname}/static_src`,
            include: path.resolve(__dirname, "static_src"),// ++
            exclude: path.resolve(__dirname, "node_modules"),// ++
            // exclude: /node_modules/, // --
            use: {
                loader: 'babel-loader',
                // options: {
                // }
            },
            // use: 'babel-loader',
            // query: {
            //     presets: ["@babel/preset-env", "@babel/preset-react"],
            // },
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        },
        ],
    },
    // ++
    resolve: {
        modules: [path.resolve(__dirname, "static_src"), 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    // ++
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    devtool: 'cheap-inline-module-source-map',
};