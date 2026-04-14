import type { RuleSetRule } from 'webpack';

export function buildFileLoader(): RuleSetRule {
    return {
        test: /\.(png|jpe?g|woff|woff2)$/i,
        use: 'file-loader',
    };
}
