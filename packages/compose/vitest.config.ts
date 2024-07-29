import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  test: {
    // ...
  },
  plugins: [tsconfigPaths(), vanillaExtractPlugin()],
})
