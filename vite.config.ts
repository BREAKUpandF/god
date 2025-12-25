import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 关键：适配GitHub Pages的子路径/god/
  base: '/god/'
})
