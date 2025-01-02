import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 443,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/snowpea.site-0001/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/snowpea.site-0001/fullchain.pem'),
    },
  },
  plugins: [react()],
});