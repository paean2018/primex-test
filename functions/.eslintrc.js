module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  rules: {
    'object-curly-spacing': [2, 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false,
    }],
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 100 }],
  },
  parserOptions: {
    ecmaVersion: 12,
  },
};
