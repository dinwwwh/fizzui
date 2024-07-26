import { defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  minify: true,
  esbuildPlugins: [vanillaExtractPlugin()],
})
