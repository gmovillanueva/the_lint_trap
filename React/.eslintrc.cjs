module.exports = {
  root: true,
  env: { browser: true, es2024: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '*.config.js',
    '.*rc.js',
    'node_modules/**'],
  plugins: [
    'react-hooks',
    'prettier',
    'simple-import-sort',
  ],
  rules: { },
  settings: {
    // Simple-import-sort with recomended settings
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
  },
}
