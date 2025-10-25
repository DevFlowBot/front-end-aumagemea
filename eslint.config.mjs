import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-unused-vars': 'error',
      'new-cap': 'off',
      'no-invalid-this': 'off',
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
