import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 80
  },
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/demo/index.html'),
        nested: resolve(__dirname, 'pages/racing/index.html')
      }
    }
  }
})
