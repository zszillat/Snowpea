import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  server: {
    port: 5173, // set port to 5173
  },
  plugins: [react()],
});