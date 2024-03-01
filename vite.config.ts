import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [react(), basicSsl()],
  build: {
    lib: {
      formats: ['es'],
      fileName: 'CommentCounter',
      entry: `./src/components/CommentCounter/index.tsx`
    }
  }
})
