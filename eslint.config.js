import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  { ignores: ['dist/**', 'node_modules/**', 'bundle.js'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { parser: typescriptParser },
    plugins: { '@typescript-eslint': typescriptPlugin },
    rules: {
      ...typescriptPlugin.configs['eslint-recommended'].overrides[0].rules,
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.strict.rules,
      'react/prop-types': 'off',
    },
  },
  prettier,
]
