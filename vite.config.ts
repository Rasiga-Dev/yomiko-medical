import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change this to your repo name
const repoName = 'yomiko-medical'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
