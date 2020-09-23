module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'arrow-parens': [2, 'as-needed'],
    'react/prop-types': 0,
    'no-unused-expressions': 0,
    'object-curly-newline': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
