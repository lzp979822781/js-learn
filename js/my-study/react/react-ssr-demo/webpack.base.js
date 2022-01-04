module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: "usage"
                                }
                            ],
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}