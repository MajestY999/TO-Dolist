import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/TO-DOlist/', //  строго как в названии репозитория
  plugins: [vue()]
})