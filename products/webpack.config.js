const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // exposing so that container can use our microfrontend
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductIndex': './src/index.js'
            },
        })
    ]
}