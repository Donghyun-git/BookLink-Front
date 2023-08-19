import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// https://vitejs.dev/config/

dotenv.config();

export default defineConfig({
  define: {
    global: 'globalThis',
  },
  plugins: [react()],
  server: {
    proxy: {
      '/ws/chat': {
        target: 'http://13.124.159.21:8080/',
        ws: true,
      },
      '/api/v1': {
        target: 'http://13.124.159.21:8080/',
        ws: true,
      },
    },
  },
});
