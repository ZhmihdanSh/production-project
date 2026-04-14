import type { Linter } from 'eslint';

export const typescriptRules: Linter.RulesRecord = {
    '@typescript-eslint/consistent-type-imports': [
        'error',
        {
            prefer: 'type-imports',
            fixStyle: 'separate-type-imports',
        },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
};
