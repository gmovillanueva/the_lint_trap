module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:promise/recommended',
    'plugin:import/warnings',
    'plugin:regexp/recommended',
    'plugin:etc/recommended',
    'plugin:testing-library/dom',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    '*.config.js',
    '.*rc.js',
    'node_modules/**'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'tailwindcss',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'tailwindcss',
    'prettier',
    'simple-import-sort',
    'sort-class-members',
    'promise',
    'etc',
    'testing-library',
    'boundaries',
    'only-warn',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {},
    },
    // Import Setting
    'import/max-dependencies': [1, { max: 15 }],
    // Simple-import-sort with recomended settings
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-duplicates': 1,
    // typescript-eslint
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // sort-class-members
    'sort-class-members/sort-class-members': [
      1,
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
        accessorPairPositioning: 'getThenSet',
      },
    ],
  },
}
