import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Global config
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', 'public/**'],
  },

  // Base config for all files
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
  },

  // Config for .js and .ts files
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,
    },
  },

  // Config for .astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        // Add JS features to support parsing
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      // Astro recommended rules with some modifications
      ...astroPlugin.configs.recommended.rules,
      'astro/no-set-html-directive': 'error',
    },
  },

  // Prettier config (should be last to override other formatting rules)
  prettierConfig,
];
