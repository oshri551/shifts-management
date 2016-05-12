var path = require('path');
var webpack = require('webpack');

module.exports = {
    // for faster builds use 'eval'
    devtool: 'source-map',
    debug: true, // remove in production
    
    entry: {
        'vendor': './app/vendor.ts',
        "app": './app/boot.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
    /*
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
      //extentions: ['', '.ts', '.js']  
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
            }
        ]
    }/*,
    devServer: {
        historyApiFallback: true,
        contentBase: '',
        publicPath: '/app'
    }*/
}
