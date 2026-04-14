import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import type { BuildOptions } from './types/build';
import type { Configuration } from 'webpack';

export function buildWebpack(options: BuildOptions): Configuration {
    const { paths, isDev, mode } = options;
    const { entry, build } = paths;

    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(paths),
        module: {
            rules: buildLoaders(isDev),
        },
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}
