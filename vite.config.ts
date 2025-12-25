import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite自动识别环境：本地开发base是/，部署到GitHub Pages时base是/god/
  base: process.env.NODE_ENV === 'production' ? '/god/' : '/'
})