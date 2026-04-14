export enum BuildMode {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
}

export interface BuildPaths {
    src: string;
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    isProd: boolean;
    port: number;
    analyze: boolean;
}

export interface BuildEnvs {
    port: number;
    mode: BuildMode;
    analyze: boolean;
}
