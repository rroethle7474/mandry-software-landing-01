import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      // Generate gzip compressed files
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      // Generate brotli compressed files
      viteCompression({
        algorithm: 'brotli',
        ext: '.br',
      }),
    ],
    build: {
      // Output directory for production build
      outDir: 'dist',
      // Generate sourcemaps for debugging
      sourcemap: mode === 'development',
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code into separate chunks
            vendor: [
              'react',
              'react-dom',
              'lucide-react',
              'date-fns'
            ],
          },
        },
      },
    },
    server: {
      // Development server configuration
      port: 5173,
      strictPort: true,
      // Add headers for local development
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  };
});