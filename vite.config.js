import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.86.126',
    port: 80,
    strictPort: true,
  },
  plugins: [react()],
  define: {
    'process.env': JSON.stringify(process.env),  // Polyfill for environment variables
  },
  optimizeDeps: {
    include: ['process'],  // Include the process polyfill in optimized dependencies
  },
});
