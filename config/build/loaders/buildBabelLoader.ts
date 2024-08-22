import webpack from 'webpack';

export function buildBabelLoader(): webpack.RuleSetRule {
    return {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: require.resolve('babel-loader'),
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    require.resolve('react-refresh/babel'),
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    };
}
