---
"@flexi-ui/styles": patch
---

fix(styles): remove invalid `@apply group` from switch and checkbox

Tailwind v4 no longer allows `@apply group` because `group` is a variant
marker, not a utility. No `group-*` variants are used within the styles
package, so the directive was dead code. Removing it unblocks consumers
like the docs app that import `@flexi-ui/styles/css` through
`@tailwindcss/postcss`.
