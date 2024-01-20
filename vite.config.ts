import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    },
  },
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {},
        entryFileNames: 'assets/[name].js',
      }
    }
  }
})
