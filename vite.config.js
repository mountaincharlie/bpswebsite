import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const baseURL = process.env.NODE_ENV === 'production' ? '/bpswebsite/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // baseURL,
})
