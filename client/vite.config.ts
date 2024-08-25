import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      // injectRegister: null,
      // srcDir: 'public',
      // filename: 'firebase-messaging-sw.js',
      // workbox: {
      // sourcemap: true,
      // globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      // globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js']
      // },
      manifest: {
        name: 'Hanwoori Bus',
        short_name: 'Hwr Bus',
        theme_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
      }
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
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
  },
  base: ''
});
