import type { RuleSetRule } from 'webpack';

export function buildBabelLoader(isDev: boolean): RuleSetRule {
    return {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
                presets: ['@babel/preset-env'],
            },
        },
    };
}
