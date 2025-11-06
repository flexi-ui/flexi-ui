---
'@flexi-ui/theme': minor
---

feat: optimize bundle size and replace color library

- Replace heavy `color` library with lightweight `color2k` (47% smaller bundle)
- Externalize dependencies for better tree-shaking
- Fix ESLint no-unused-expressions warnings
- Bundle size reduced from 492KB → 260KB (88KB → 38KB gzipped)
