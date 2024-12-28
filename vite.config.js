import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8443,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/snowpea.site/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/snowpea.site/fullchain.pem'),
    },
  },
  plugins: [react()],
});
