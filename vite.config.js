import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for local development and Vercel deployment
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  server: {
    port: 8080,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});