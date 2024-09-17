import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader()
  ],
  server:{
    port: 7500
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  build:{
    outDir:'build'
  }
})
