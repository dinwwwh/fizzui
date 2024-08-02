import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, '../../packages/styles/src'),
      '@fizzui/styles': path.resolve(__dirname, '../../packages/styles/src'),
    },
  },
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/router.gen.ts',
      experimental: {
        enableCodeSplitting: true,
      },
    }),
    react(),
    vanillaExtractPlugin(),
  ],
})
