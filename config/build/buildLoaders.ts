import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/build';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader();
    const typescriptLoader = buildTypescriptLoader();
    const cssLoader = buildCssLoader(options.isDev);
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader
    ];
}
