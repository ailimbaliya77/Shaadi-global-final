import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Shaadi-global-final/',
  plugins: [react()],
  build: {
    // Enable chunk splitting
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Add other chunking strategies as needed
        }
      }
    }
  }
});

