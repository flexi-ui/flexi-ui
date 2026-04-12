# @flexi-ui/use-overlay-state

## 1.0.0

### Major Changes

- [#82](https://github.com/flexi-ui/flexi-ui/pull/82) [`bae2aea`](https://github.com/flexi-ui/flexi-ui/commit/bae2aeab87a8e2036c192100c4a37d25c8c504ee) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - Unified baseline release. Existing packages move to a single shared `6.0.0` line and brand-new packages (`@flexi-ui/avatar`, `@flexi-ui/styles`, plus the seven `use-*` hooks) start at `1.0.0`. No runtime behavior changes — this is a versioning re-alignment so every package in the monorepo ships from a consistent starting point going forward.

## 2.0.0

### Major Changes

- [#80](https://github.com/flexi-ui/flexi-ui/pull/80) [`6904270`](https://github.com/flexi-ui/flexi-ui/commit/69042707410aac7e8f0f7be5c5d422e8919f70a5) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - **Phase 1 — Foundation utilities and hooks**

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
