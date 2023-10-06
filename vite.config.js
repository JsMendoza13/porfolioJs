import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.html'], // Agrega '.html' aquí
  },

  css: {
    postcss: './postcss.config.js', // Ruta al archivo de configuración de PostCSS
  },
});
