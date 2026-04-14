import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin, DefinePlugin, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { BuildOptions } from './types/build';
import type { WebpackPluginInstance } from 'webpack';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const { isDev, isProd, analyze, paths } = options;
    const { html } = paths;

    const plugins: WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({ template: html }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:5].css',
        }));
        plugins.push(new ProgressPlugin());
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
    }

    return plugins;
}
