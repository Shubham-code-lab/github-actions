import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

// Filter out globals with whitespace issues
const browserGlobals = Object.fromEntries(
  Object.entries(globals.browser).filter(([key]) => key.trim() === key)
);
const es2021Globals = Object.fromEntries(
  Object.entries(globals.es2021).filter(([key]) => key.trim() === key)
);
const vitestGlobals = Object.fromEntries(
  Object.entries(globals.vitest || {}).filter(([key]) => key.trim() === key)
);

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...browserGlobals,
        ...es2021Globals,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'off', // Prop-types validation is optional
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^React$',
        argsIgnorePattern: '^_',
      }],
    },
  },
  {
    files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
    languageOptions: {
      globals: {
        ...vitestGlobals,
        ...browserGlobals,
        ...es2021Globals,
      },
    },
  },
];

