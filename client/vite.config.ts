import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      host: 'localhost'
    },
    watch: {
      usePolling: true
    },
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': '/src'
    },
  },
})
