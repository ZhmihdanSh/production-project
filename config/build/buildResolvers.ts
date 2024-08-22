import webpack from 'webpack';
import { BuildOptions } from './types/build';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    const { paths } = options;

    return {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        mainFiles: ['index'],
        preferAbsolute: true,
        modules: ['node_modules', paths.src],
        alias: {}
    };
}
