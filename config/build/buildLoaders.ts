import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import type { RuleSetRule } from 'webpack';

export function buildLoaders(isDev: boolean): RuleSetRule[] {
    const babelLoader = buildBabelLoader(isDev);
    const typescriptLoader = buildTypescriptLoader();
    const cssLoader = buildCssLoader(isDev);
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();

    return [
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
