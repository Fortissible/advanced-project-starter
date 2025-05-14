import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  // Base JS Configurations
  js.configs.recommended,

  // TypeScript/React Files Configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/display-name': ['error', { ignoreTranspilerName: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'react/display-name': 'off', // Disable display-name rule
      'no-undef': 'off', // Disable no-undef rule
      '@typescript-eslint/no-unused-vars': 'warn', // Disable no-unused-vars rule
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Test Files Configuration
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },

  // JS Files Configuration (CommonJS)
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // Ignore Files Configuration
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'scripts/remove-console.ts',
      'app.config.ts',
      'src/clients/http/models/error.model.ts',
      'eslint.config.mjs',
      'jest.config.js',
      'jest.setup.js',
    ],
  },

  // JavaScript Files using Babel Parser
  {
    files: ['*.js'],
    languageOptions: {
      parser: babelParser,
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-undef': 'off',
      'import/no-commonjs': 'off',
    },
  },
];
