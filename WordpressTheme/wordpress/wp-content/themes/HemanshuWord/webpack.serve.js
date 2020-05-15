const path = require("path");
const common = require("./webpack.common");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const merge = require("webpack-merge");

/**
 * Configure Webpack Dev Server.
 *
 * @return {Object}
 */
const configureDevServer = () => {
    return {
        host: 'localhost',
        hot: true,
        inline: true,
        overlay: true,
        port: 3000,
        proxy: {
            '**' : {
                target: 'http://nginx:8081',
                changeOrigin: true
            }
        }
    };
};

module.exports = merge(common, {
    devServer: configureDevServer(),
    devtool: 'source-map',
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath:'http://nginx:8081'
    },
});
