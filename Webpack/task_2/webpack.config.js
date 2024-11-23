const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            // Rule for CSS
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // Rule for Images
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true },
                            optipng: { enabled: false },
                            pngquant: { quality: [0.65, 0.90], speed: 4 },
                            gifsicle: { interlaced: false },
                            svgo: { plugins: [{ removeViewBox: false }] },
                        },
                    },
                ],
            },
        ],
    },
    performance: {
        maxAssetSize: 250000, // Set size limits to avoid warnings
    },
};
