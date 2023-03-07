
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
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
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".ts", ".tsx"],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
    
}