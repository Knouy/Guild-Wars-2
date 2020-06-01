module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'max-len': ['error', { 'code': 80 }],
    'no-eval': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    semi: ['error', 'always']
  }
}
