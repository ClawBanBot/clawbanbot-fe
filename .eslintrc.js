module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '!.prettierrc.js'], // We don't want to lint generated files or node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        "react/react-in-jsx-scope": "off",
        'function-paren-newline': 'off',
        'react/prop-types': 'off', // We will use TypeScript's types for component props instead
        '@typescript-eslint/explicit-function-return-type': [
          // I suggest this setting for requiring return types on functions only where useful
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
};
