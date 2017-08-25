import {babelLoader} from "./webpack/webpack.babelLoader"
import {styleLoader, extractStyleCSS} from "./webpack/webpack.styleLoader"
import {fontLoader} from "./webpack/webpack.fontLoader"
import {imageLoader} from "./webpack/webpack.imageLoader"
import {htmlLoader, extractIndexHTML} from "./webpack/webpack.htmlLoader"
import {vueLoader} from "./webpack/webpack.vueLoader"
import {definePluginProduction, uglifyJS} from "./webpack/webpack.plugins"

let webpackConfig = {
    entry: {
        'index.html': [
            './src/index.html'
        ],
        'js/app.js': [
            './src/app.js'
        ],
        'css/style.css': [
            './src/sass/style.scss',
        ],
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name]'
    },
    module: {
        rules: [
            vueLoader,
            htmlLoader,
            babelLoader,
            fontLoader,
            styleLoader,
            imageLoader,
        ]
    },
    plugins: [
        extractStyleCSS,
        extractIndexHTML
    ]
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([definePluginProduction, uglifyJS])
}

module.exports = webpackConfig;