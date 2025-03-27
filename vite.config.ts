import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/simulations/',
  plugins: [react()],
  build: {
    outDir:'vdeploy'
  }
})
