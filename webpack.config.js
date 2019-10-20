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
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }

            // use: 'babel-loader',
            // query: {
            //     presets: ["@babel/preset-env", "@babel/preset-react"],
            // },
        }],
    },
};
//lesson-1