import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/me/',
  plugins: [
    react(),
    // Plugin to copy files needed for GitHub Pages
    {
      name: 'copy-github-pages-files',
      closeBundle() {
        try {
          copyFileSync('public/404.html', 'dist/404.html')
          copyFileSync('public/.nojekyll', 'dist/.nojekyll')
        } catch (err) {
          console.warn('Could not copy GitHub Pages files:', err.message)
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

