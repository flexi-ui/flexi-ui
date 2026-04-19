---
'@flexi-ui/button': patch
'@flexi-ui/form': patch
'@flexi-ui/input': patch
'@flexi-ui/link': patch
'@flexi-ui/use-image': patch
---

Remove legacy packages (`@flexi-ui/theme`, `@flexi-ui/system`, `@flexi-ui/system-rsc`, `@flexi-ui/react-utils`, `@flexi-ui/react-rsc-utils`, `@flexi-ui/dom-animation`) and migrate all components to the `cx` helper from `tailwind-variants` in place of the removed `composeTwRenderProps` utility. `@flexi-ui/use-image` now depends on `@flexi-ui/use-is-hydrated` directly.
