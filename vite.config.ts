import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/attenzia-dooh-audience-meter/' : '/',
  plugins: [tailwindcss(), react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
