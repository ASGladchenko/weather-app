import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@/shared/*': './src/shared/*',
      '@/entities/': './src/entities/index.ts',
      '@/pages/': './src/pages/index.ts',
      '@/widgets/': './src/widgets/index.ts',
      '@/features/': './src/features/index.ts',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/shared/styles/api" as *;`,
      },
    },
  },
});
