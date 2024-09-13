// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '**/src/**/*.test.{ts,tsx}'
            ],
            rules: {
                'i18next/no-literal-string': 'off'
            },
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'react',
        'import',
        'i18next'
    ],
    rules: {
        'react/prefer-stateless-function': 'error',
        'react/button-has-type': 'error',
        'react/no-unused-prop-types': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-no-script-url': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'react/jsx-fragments': 'error',
        'react/destructuring-assignment': [
            'error',
            'always'
        ],

        'react/jsx-max-depth': ['error', { max: 5 }],
        'react/function-component-definition': [
            'warn',
            { namedComponents: 'arrow-function' }
        ],
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
                warnOnDuplicates: true
            }
        ],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-curly-brace-presence': 'warn',
        'react/no-typos': 'warn',
        'react/display-name': 'off',
        'react/self-closing-comp': 'warn',
        'react/jsx-sort-props': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'newline-before-return': 'error',
        'comma-dangle': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'import/no-unresolved': 'off',
        'object-curly-spacing': ['error', 'always'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid']
            }
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        indent: ['error', 4],
        'import/named': 'off',
        'react/no-deprecated': 'off'
    },
    globals: {
        __IS_DEV__: true
    }
};
