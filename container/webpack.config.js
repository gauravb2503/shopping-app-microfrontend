const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // intergration of MicroFrontends
        // expose is used when you want to make your microfrontend module to be available to container
        // remotes is used when you want to intergrate teh microfrontend module into the container
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:3001/remoteEntry.js',
                cart: 'cart@http://localhost:3002/remoteEntry.js'
            }
        })
    ]
}