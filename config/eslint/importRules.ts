import type { Linter } from 'eslint';

export const importRules: Linter.RulesRecord = {
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/order': [
        'warn',
        {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
            'newlines-between': 'never',
            alphabetize: { order: 'asc', caseInsensitive: true },
        },
    ],
};
