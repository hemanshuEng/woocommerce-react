const path = require("path");
const ManifestPlugin = require('webpack-manifest-plugin');


// Theme paths
const THEME_PATH = "/wp-content/themes/HemanshuWord/dist/";
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test:/\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new ManifestPlugin(
            {
                filename:"manifest.json"
            }
        )
    ]
};