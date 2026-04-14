import path from 'path';
// @ts-expect-error typescript ругается на использование расширения в имени файла, но storybook 10 работает на ESM и требует явного указания расширения.
import { buildCssLoader } from '../build/loaders/buildCssLoader.ts';
// @ts-expect-error typescript ругается на использование расширения в имени файла, но storybook 10 работает на ESM и требует явного указания расширения.
import { buildSvgLoader } from '../build/loaders/buildSvgLoader.ts';
import type { StorybookConfig } from '@storybook/react-webpack5';
import type { Configuration, RuleSetRule } from 'webpack';

const config: StorybookConfig = {
    'stories': [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    'addons': [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
    ],
    'framework': '@storybook/react-webpack5',
    async webpackFinal(config: Configuration, options) {
        const src = path.resolve(options.configDir, '..', '..', 'src');

        config.resolve.modules.push(src);
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push(buildCssLoader(true));

        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module.rules.push(buildSvgLoader());

        return config;
    },
};

export default config;
