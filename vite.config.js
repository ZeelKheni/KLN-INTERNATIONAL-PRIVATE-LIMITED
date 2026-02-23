import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.mp4'], // Include .glb files as assets
  base: "/KLN-INTERNATIONAL-PRIVATE-LIMITED",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})