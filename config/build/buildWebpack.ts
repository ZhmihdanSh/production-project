import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { BuildOptions } from './types/build';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    };
}
