const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "build"),
        },
        port: 3000,
      },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
        ]
    },
    resolve: {
        extensions: ["*", ".js"],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    
}