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

  const seenIds = new Map<string, number>()

  return headingLines.map((raw) => {
    const text = raw.replace(/^#{1,3}\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : raw.slice(0, 2) === '##' ? 2 : 1
    let id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    // Ensure unique IDs by appending a number for duplicates
    const count = seenIds.get(id) || 0
    if (count > 0) {
      id = `${id}-${count + 1}`
    }
    seenIds.set(id.replace(/-\d+$/, ''), count + 1)

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
