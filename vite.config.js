import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Paralax/',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173', 
        changeOrigin: true,
      },
    },
  },
});