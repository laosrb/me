import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/me/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/my-cs-portfolio/',
// })
// {
//   "name": "my-portfolio",
//   "version": "1.0.0",
//   "homepage": "https://laosrb.github.io/my-cs-portfolio",
//   "scripts": {
//   "dev": "vite",
//   "build": "vite build",
//   "preview": "vite preview",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d dist"
//   },
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   },
//   "devDependencies": {
//     "@vitejs/plugin-react": "^4.2.0",
//     "gh-pages": "^5.0.0",
//     "vite": "^5.0.0"
//   }
// }
