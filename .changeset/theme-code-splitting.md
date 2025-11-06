---
'@flexi-ui/theme': minor
---

feat: add code splitting and package exports for better tree-shaking

- Split theme into multiple entry points (main, components, utils, colors)
- Main bundle reduced from 260KB → 12KB (88% reduction!)
- Component themes now lazy-loaded only when imported
- Added package.json exports for granular imports
- Users can now import specific parts: `@flexi-ui/theme/components`, `@flexi-ui/theme/utils`, etc.
