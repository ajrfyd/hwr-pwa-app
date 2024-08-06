import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Hanwoori Bus',
        short_name: 'HanBus',
        theme_color: '#fff',
        icons: [
          {
            src: 'icons/pwa-64x64.png',
            type: 'image/png',
            sizes: '64x64'
          },
          {
            src: 'icons/pwa-192x192.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: 'icons/pwa-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'any'
          },
          {
            src: 'icons/maskable-icon-512x512.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      }
    ]
  },
  server: {
    port: 5000
  },
  build: {
    outDir: './build'
  },
  preview: {
    port: 5000
  }
});
