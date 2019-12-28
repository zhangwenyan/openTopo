module.exports = {
    mode: 'development',//模式,默认两种production development
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js',
        library: 'opentopo',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader'
            }

        ]
    }
}