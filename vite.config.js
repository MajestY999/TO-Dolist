import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/todo-vue/', //  путь совпадает с именем репозитория
  plugins: [vue()]
})