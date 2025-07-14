import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000, // optional: for local dev
  },
  // 👇 this ensures client-side routing works on Render
  resolve: {
    alias: {},
  },
  // 👇 needed only when deploying under a subpath (not needed for root '/')
  base: '/',
});
