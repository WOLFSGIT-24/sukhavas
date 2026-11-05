import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const webhookUrl = 
    env.VITE_WEBHOOK_URL || 
    env.WEBHOOK_URL || 
    'https://hook.us1.make.com/dnbylidrm0kx1d4pi7srar6k1lqvsg2f';

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.VITE_WEBHOOK_URL': JSON.stringify(webhookUrl),
    },
    envPrefix: ['VITE_', 'WEBHOOK_'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild' as const,
      cssMinify: 'esbuild' as const,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
