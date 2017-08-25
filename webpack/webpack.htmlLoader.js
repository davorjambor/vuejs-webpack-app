import ExtractTextPlugin from 'extract-text-webpack-plugin'

export const extractIndexHTML = new ExtractTextPlugin('index.html');

let htmlLoaderLet = {
    test: /\.html$/,
    use: extractIndexHTML.extract({
        loader: 'html-loader',
        options: {
            minimize: false,
            removeComments: false,
            collapseWhitespace: false
        }
    })
}

if (process.env.NODE_ENV === 'production') {
    htmlLoaderLet = {
        test: /\.html$/,
        use: extractIndexHTML.extract({
            loader: 'html-loader',
            options: {
                minimize: true,
                removeComments: true,
                collapseWhitespace: true
            }
        })
    }
}

export const htmlLoader = htmlLoaderLet;