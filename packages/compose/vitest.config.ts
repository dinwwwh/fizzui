import { defineConfig } from 'vitest/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import config from './vite.config'

export default defineConfig({
  resolve: config.resolve,
  plugins: [
    ...(config.plugins || []),
    vanillaExtractPlugin(),
  ],
})
