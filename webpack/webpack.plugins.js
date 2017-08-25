import webpack from 'webpack'

export const definePluginProduction =
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }
);

export const uglifyJS =
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    }
);