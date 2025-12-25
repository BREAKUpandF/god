import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 动态base：本地开发用/，部署用/god/
const base = process.env.NODE_ENV === 'production' ? '/god/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
  // 确保public目录的资源正确解析
  resolve: {
    alias: {
      '@': '/src' // 可选：别名，避免src路径混淆
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保public资源被正确复制
    copyPublicDir: true
  }
})