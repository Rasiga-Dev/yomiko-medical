import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yamiko-medical/', // IMPORTANT for GitHub Pages under repo
})