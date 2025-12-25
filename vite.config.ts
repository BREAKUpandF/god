import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 新增：设置base为GitHub Pages的子路径（仓库名为god，所以是/god/）
  base: '/god/'
})