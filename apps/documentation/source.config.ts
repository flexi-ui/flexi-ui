import { defineDocs, defineConfig } from 'fumadocs-mdx/config'
import rehypeSlug from 'rehype-slug'

export const docs = defineDocs({
  dir: 'content/docs',
})

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => [rehypeSlug, ...plugins],
  },
})
