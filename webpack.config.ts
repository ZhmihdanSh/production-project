import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode } from './config/build/types/build';
import type { BuildEnvs, BuildPaths } from './config/build/types/build';

export default (env: BuildEnvs) => {
    const mode = env.mode ?? BuildMode.DEVELOPMENT;
    const port = env.port ?? 5000;
    const analyze = env.analyze ?? false;

    const isDev = mode === BuildMode.DEVELOPMENT;
    const isProd = mode === BuildMode.PRODUCTION;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'Index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    return buildWebpack({
        mode,
        port,
        isDev,
        isProd,
        analyze,
        paths,
    });
};
