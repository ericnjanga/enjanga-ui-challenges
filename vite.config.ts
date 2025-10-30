import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper to auto-detect all HTML files in subfolders
function getHtmlEntries() {
  const baseDirs = ['projects-react-ts', 'projects-ts']
  const entries: Record<string, string> = {}

  for (const dir of baseDirs) {
    const folderPath = path.resolve(__dirname, dir)
    if (!fs.existsSync(folderPath)) continue

    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.html'))
    for (const file of files) {
      const name = `${dir}/${file}`.replace(/\.[^/.]+$/, '')
      entries[name] = path.resolve(folderPath, file)
    }
  }

  return entries
}

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        ...getHtmlEntries()
      }
    }
  },
  server: {
    open: false,
    fs: {
      // Allow serving files from subdirectories
      allow: ['.', 'projects-react', 'projects-ts']
    }
  }
})
