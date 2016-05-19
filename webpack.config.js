//Webpack congiguration

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // for faster builds use 'eval'
    devtool: 'source-map',
    debug: true, // remove in production
    
    entry: {
        'vendor': './app/vendor.ts',
        "app": './app/boot.ts',
        "style": './app/styles.ts'
    },
    output: {
        path: path.resolve('./app'),
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
        preLoaders: [
            { 
                test: /\.component.css$/,
                loader: 'raw-loader',
                exclude: [path.resolve(__dirname, 'styles.ts')]
            }
        ],
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
            },
            { 
                test: /\.css$/,   
                loader: ExtractTextPlugin.extract('raw-loader'),
                exclude: [/\.component\.css$/]
            },
            { test: /\.html$/,  loader: 'raw-loader' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ],
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        contentBase: path.resolve('./app')//,
        //publicPath: '/app'
        //outputPath: 
    }
}
