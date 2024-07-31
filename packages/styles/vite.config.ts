import path from 'node:path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  build: {
    target: 'es2022',
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys((pkg as any).dependencies || {}), ...Object.keys((pkg as any).peerDependencies || {})],
    },
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts({
    compilerOptions: {
      types: ['vite/client'],
    },
    exclude: ['**/*.test.*', '**/__tests__/**'],
  }), vanillaExtractPlugin()],
})
