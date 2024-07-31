import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, '../../packages/styles/src'),
    },
  },
  plugins: [react(), vanillaExtractPlugin()],
})
