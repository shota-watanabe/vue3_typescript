import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { onServerPrefetch } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // https://ja.vitejs.dev/config/server-options.html
  server: {
    port: 8000
  }
})
