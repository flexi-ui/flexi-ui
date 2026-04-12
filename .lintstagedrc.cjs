/* eslint-disable @typescript-eslint/no-require-imports */
const { relative } = require('path')

const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
  const cwd = process.cwd()
  const eslint = new ESLint()
  const relativePaths = files.map((file) => relative(cwd, file))
  const isIgnored = await Promise.all(relativePaths.map((file) => eslint.isPathIgnored(file)))
  const filteredFiles = files.filter((_, i) => !isIgnored[i])

  return filteredFiles.join(' ')
}

module.exports = {
  '**/*.{js,ts,jsx,tsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)

    return [`eslint --max-warnings=0 --fix ${filesToLint}`]
  },
  '**/*.css': (files) => {
    if (files.length === 0) return []

    return [`prettier --write ${files.join(' ')}`]
  },
}
