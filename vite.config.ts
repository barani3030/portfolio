import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  base: '/portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
