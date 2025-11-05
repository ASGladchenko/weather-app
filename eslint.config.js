import globals from 'globals';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import parser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['dist'], // Ignore build files
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Set ECMAScript version
      globals: globals.browser, // Include browser global variables
      parser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Include recommended React Hooks rules
      ...tseslint.configs.recommended.rules, // Include recommended TypeScript rules

      // React-specific rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/jsx-no-undef': 'error',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'no-console': 'warn',
    },
  },
];
