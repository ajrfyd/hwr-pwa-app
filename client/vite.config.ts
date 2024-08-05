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
            src: 'icons/favicon-32x32.png',
            type: 'image/png',
            sizes: '32x32'
          },
          {
            src: 'icons/favicon-96x96.png',
            type: 'image/png',
            sizes: '96x96'
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
