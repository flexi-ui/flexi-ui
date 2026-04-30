---
"@flexi-ui/styles": patch
---

fix(styles): publish CSS files alongside JS in dist

The previous build pipeline emitted only `dist/index.js` + `dist/index.d.ts`
via `tsup`. Root-level `index.css` and the `base/`, `components/`, `themes/`,
`utilities/`, `variants/` CSS trees were never copied into `dist`, and the
`files: ["dist", "src"]` field excluded them from the published tarball.
Consumers running `@import '@flexi-ui/styles/css'` worked locally (pnpm
symlinks) but broke on `npm install` because the CSS paths didn't exist in
the package.

This patch:

- adds `scripts/copy-css.mjs` that mirrors the CSS tree into `dist/`
- expands the tsup entry to emit per-component JS at `dist/components/*/index.js`
- adds `tsconfig.build.json` + a `tsc --emitDeclarationOnly` step so each
  per-component entry gets a matching `.d.ts`
- updates `exports` so every condition resolves under `dist/`, including
  new subpaths for `./base/*.css`, `./components/*.css`, `./themes/*/*.css`,
  `./utilities/*.css`, `./variants/*.css`
- shrinks `files` to `["dist"]` since CSS now lives there
