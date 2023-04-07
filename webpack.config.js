'use strict';

const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'Home/index': './resources/views/Home/Index.jsx',
        'Dashboard/index': './resources/views/Dashboard/Index.jsx'
       
    },
    output: {
        path: path.resolve(__dirname, ''),
        filename: "public/dist/[name].js"
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};