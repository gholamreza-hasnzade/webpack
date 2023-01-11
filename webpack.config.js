const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        assetModuleFilename: 'images/[name][ext]'
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe|jpg|svg|jepg?g|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: "asset/inline",
            }
        ],
    },
};
