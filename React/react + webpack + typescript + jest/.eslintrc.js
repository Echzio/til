module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-var-requires': 0,
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': 'webpack',
  },
};
