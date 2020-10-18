module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        jsx: true,
        useJSXTextNode: true,
    },
    plugins: ["@typescript-eslint", "react-hooks"],
    rules: {
        "import/prefer-default-export": 0,
        "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
        "react/react-in-jsx-scope": 0,
        "import/extensions": 0,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".json", ".ts", ".tsx", ".d.ts"],
            },
        },
    },
};
