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
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/static_src`,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // use: ['babel-loader'],
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            },
        ],
    },
};