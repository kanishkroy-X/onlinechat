import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.{ts,js}'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.*/**',
      '**/.agents/**',
      '**/.antigravity/**',
      '**/.claude/**',
      '**/.kilocode/**',
      '**/.zencoder/**',
      '**/.kilo/**'
    ],
  },
});
