export const fontLoader = {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
        name: 'font/[name].[ext]',
    }
};