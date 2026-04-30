#!/usr/bin/env node
/* eslint-disable no-console */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

const copyCssDirectory = (dirName) => {
  const srcDirPath = path.join(rootDir, dirName)
  const distDirPath = path.join(distDir, dirName)

  if (!fs.existsSync(srcDirPath)) return
  if (!fs.existsSync(distDirPath)) fs.mkdirSync(distDirPath, { recursive: true })

  for (const file of fs.readdirSync(srcDirPath)) {
    const srcFilePath = path.join(srcDirPath, file)
    const distFilePath = path.join(distDirPath, file)
    const stat = fs.statSync(srcFilePath)

    if (stat.isDirectory()) {
      copyCssDirectory(path.join(dirName, file))
    } else if (file.endsWith('.css')) {
      fs.copyFileSync(srcFilePath, distFilePath)
    }
  }
}

const indexPath = path.join(rootDir, 'index.css')
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(distDir, 'index.css'))
}

for (const dir of ['base', 'components', 'themes', 'utilities', 'variants']) {
  copyCssDirectory(dir)
}
