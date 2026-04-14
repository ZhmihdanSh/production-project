import path from 'path';
import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    rootDir: '../../',
    roots: [
        '<rootDir>',
    ],
    clearMocks: true,
    testMatch: [
        '<rootDir>src/**/*.(spec|test).[tj]s?(x)',
    ],
    moduleNameMapper: {
        '\\.module\\.(scss|sass)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'JestEmptyComponent.tsx'),
    },
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};

export default config;
