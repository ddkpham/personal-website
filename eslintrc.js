module.exports = {
  extends: 'airbnb-base',
  'prefer-destructuring': 'warn',
  'prefer-promise-reject-errors': 'off',
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
  'react/destructuring-assignment': 'warn',
  'react/forbid-prop-types': [
    'off',
    {
      checkChildContextTypes: false,
      checkContextTypes: false,
      forbid: [],
    },
  ],
  'react/jsx-filename-extension': [
    'warn',
    {
      extensions: [
        '.js',
        '.jsx',
      ],
    },
  ],
  'react/jsx-one-expression-per-line': 'off',
  'react/no-did-update-set-state': 'warn',
  'react/sort-comp': 'warn',
};
