import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages: base를 레포지토리 이름으로 설정 (예: /price-page/)
  // 로컬: base: '/' 사용
  base: '/price-page/',
}))
