import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/To-do-List/', //  строго как в названии репозитория
  plugins: [vue()]
})