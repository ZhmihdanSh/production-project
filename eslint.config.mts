import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import pluginImportX from 'eslint-plugin-import-x';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import { i18nextPlugin } from './config/eslint/custom/i18n';
import { customRules } from './config/eslint/customRules';
import { importRules } from './config/eslint/importRules';
import { stylisticRules } from './config/eslint/stylisticRules';
import { typescriptRules } from './config/eslint/typescriptRules';

export default defineConfig([
    {
        ignores: ['build', 'node_modules', 'dist'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            //@ts-expect-error Не соответствие типов в текущей версии eslint и eslint-plugin-import-x
            'import': pluginImportX,
            '@stylistic': stylistic,
            '@typescript-eslint': typescriptEslint.plugin,
            'i18next': i18nextPlugin,
        },
        settings: {
            'import-x/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            ...importRules,
            ...typescriptRules,
            ...stylisticRules,
            ...customRules,
        },
    },
    {
        files: ['**/*.test.{ts,tsx}', '**/dev/**/*.{tsx,jsx}'],
        rules: {
            'i18next/no-hardcoded-strings': 'off',
        },
    },
    ...typescriptEslint.configs.recommended,
    pluginReactHooks.configs.flat.recommended,
    ...storybook.configs['flat/recommended'],
]);
