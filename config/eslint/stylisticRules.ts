import type { Linter } from 'eslint';

export const stylisticRules: Linter.RulesRecord = {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/indent': ['error', 4],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/max-len': ['error', { code: 120, ignoreComments: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
};
