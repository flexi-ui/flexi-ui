export interface Route {
  key: string
  title: string
  path?: string
  updated?: boolean
  newPost?: boolean
}

export function getHeadings(source: string) {
  const headingLines = source.split('\n').filter((line) => {
    return line.match(/^#{1,3}\s/)
  })

  return headingLines.map((raw) => {
    const text = raw.replace(/^#{1,3}\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : raw.slice(0, 2) === '##' ? 2 : 1
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    return {
      text,
      level,
      id,
    }
  })
}

export interface Heading {
  text: string
  level: number
  id: string
}
