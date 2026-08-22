import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BioHealthPharma/', // 👈 MAKE SURE TO ADD THIS LINE EXACTLY
})
