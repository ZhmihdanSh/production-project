import type { BuildPaths } from './types/build';
import type { ResolveOptions } from 'webpack';

export function buildResolvers(paths: BuildPaths): ResolveOptions {
    const { src } = paths;

    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        modules: ['node_modules', src],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {},
    };
}
