import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

export const extractStyleCSS = new ExtractTextPlugin('css/style.css');

let styleLoaderLet = {
    test: /\.(s?)css$/,
    use: extractStyleCSS.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: { importLoaders: 1 }
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: () => [ autoprefixer({ browsers: ['last 3 versions'] }) ]
                }
            },
            'sass-loader'
        ],
    })
};

if (process.env.NODE_ENV === 'production') {
    styleLoaderLet = {
        test: /\.(s?)css$/,
        use: extractStyleCSS.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: { minimize: true, importLoaders: 1 }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => [ autoprefixer({ browsers: ['last 3 versions'] }) ]
                    }
                },
                'sass-loader'
            ],
        })
    }
}

export const styleLoader = styleLoaderLet;