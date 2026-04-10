---
'@flexi-ui/react-utils': minor
'@flexi-ui/use-is-hydrated': major
'@flexi-ui/use-css-variable': major
'@flexi-ui/use-media-query': major
'@flexi-ui/use-mounted': major
'@flexi-ui/use-measured-height': major
'@flexi-ui/use-overlay-state': major
'@flexi-ui/use-list-data': major
---

**Phase 1 — Foundation utilities and hooks**

Introduces the foundational utilities and hooks every upcoming FlexiUI component will rely on.

**`@flexi-ui/react-utils` — new exports:**

- `tv` — wrapper around `tailwind-variants` with `twMerge: false` by default
- `VariantProps` — re-exported type
- `mapPropsVariants` — splits a props object into `[rest, variantProps]` for compound components
- `createVariantBuilder` / `createVariants` — declarative BEM-style variant builders
- `Logger` — leveled console logger for development warnings

**New hook packages (each individually installable):**

- `@flexi-ui/use-is-hydrated` — detect client-side hydration
- `@flexi-ui/use-css-variable` — read CSS custom properties with SSR support
- `@flexi-ui/use-media-query` — subscribe to CSS media query changes
- `@flexi-ui/use-mounted` — getter for mounted state, useful in async callbacks
- `@flexi-ui/use-measured-height` — observe an element's `scrollHeight` via `ResizeObserver`
- `@flexi-ui/use-overlay-state` — controlled/uncontrolled open state for Modal, Popover, Drawer, etc.
- `@flexi-ui/use-list-data` — immutable list state with selection and filtering (based on `@react-stately/data`, inlined to avoid the dependency)
