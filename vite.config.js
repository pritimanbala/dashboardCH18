import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // learning from here, in the docs it is said that to give the tailwindcss part there but dont give that, the react has already included that
    // also make sure that you have installed the vitejs plugin-react
  ],
})
