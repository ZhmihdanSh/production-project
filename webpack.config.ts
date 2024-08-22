import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/build';
import { buildWebpack } from './config/build/buildWebpack';
import webpack from 'webpack';
import path from 'path';

export default (env: BuildEnv): webpack.Configuration => {
    const mode = env.mode ?? BuildMode.development;
    const port = env.port ?? 3000;
    const isDev = mode === BuildMode.development;
    const isProd = mode === BuildMode.production;

    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    };

    return buildWebpack({
        mode,
        port,
        isDev,
        paths,
        isProd
    });
};
