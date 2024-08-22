export enum BuildMode {
    development  = 'development',
    production = 'production',
}

export interface BuildOptions {
    paths: BuildPaths;
    port: number;
    mode: BuildMode;
    isDev: boolean;
    isProd: boolean;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface BuildPaths {
    entry: string;
    build: string;
    src: string;
    html: string;
}

export type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
