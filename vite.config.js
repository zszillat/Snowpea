import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': JSON.stringify(process.env),  // Polyfill for environment variables
  },
  optimizeDeps: {
    include: ['process'],  // Include the process polyfill in optimized dependencies
  },
});
