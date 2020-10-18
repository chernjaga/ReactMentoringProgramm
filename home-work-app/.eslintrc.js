module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        jsx: true,
        useJSXTextNode: true,
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true, optionalDependencies: false, peerDependencies: false },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        'react/require-default-props': 0,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'import/extensions': 0,
        'camel-case': 'off',
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
};
