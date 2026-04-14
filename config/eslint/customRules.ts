import type { Linter } from 'eslint';

export const customRules: Linter.RulesRecord = {
    'i18next/no-hardcoded-strings': [
        'error',
        {
            ignoreAttributes: [
                'className',
                'style',
                'id',
                'type',
                'name',
                'key',
                'aria-label',
            ],
        },
    ],
};
