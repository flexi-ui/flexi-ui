# @flexi-ui/react-utils

## 2.0.2

### Patch Changes

- Updated dependencies [[`a89c6c5`](https://github.com/flexi-ui/flexi-ui/commit/a89c6c5a8f280e38e4d8caf93630cbb456e07e2e)]:
  - @flexi-ui/shared-utils@2.0.3
  - @flexi-ui/react-rsc-utils@2.0.1

## 2.0.1

### Patch Changes

- Updated dependencies [[`79b9565`](https://github.com/flexi-ui/flexi-ui/commit/79b9565009155972fb76652ef07710df4d2d3ecb)]:
  - @flexi-ui/shared-utils@2.0.2

## 2.0.0

### Major Changes

- [#82](https://github.com/flexi-ui/flexi-ui/pull/82) [`bae2aea`](https://github.com/flexi-ui/flexi-ui/commit/bae2aeab87a8e2036c192100c4a37d25c8c504ee) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - Unified baseline release. Existing packages move to a single shared `6.0.0` line and brand-new packages (`@flexi-ui/avatar`, `@flexi-ui/styles`, plus the seven `use-*` hooks) start at `1.0.0`. No runtime behavior changes — this is a versioning re-alignment so every package in the monorepo ships from a consistent starting point going forward.

### Patch Changes

- Updated dependencies [[`bae2aea`](https://github.com/flexi-ui/flexi-ui/commit/bae2aeab87a8e2036c192100c4a37d25c8c504ee)]:
  - @flexi-ui/react-rsc-utils@2.0.0
  - @flexi-ui/shared-utils@2.0.0

## 1.1.0

### Minor Changes

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

## 1.0.4

### Patch Changes

- [#49](https://github.com/flexi-ui/flexi-ui/pull/49) [`7737e4e`](https://github.com/flexi-ui/flexi-ui/commit/7737e4ef22e3dacf2950663b9270dc2bac36000c) Thanks [@it-umerzahoor](https://github.com/it-umerzahoor)! - fix(react-utils):handle hydration

## 1.0.3

### Patch Changes

- Updated dependencies [[`ed20567`](https://github.com/flexi-ui/flexi-ui/commit/ed2056717f394ae3ac302f44026bebe7b4fe14aa)]:
  - @flexi-ui/shared-utils@1.0.3

## 1.0.2

### Patch Changes

- [`5542a1b`](https://github.com/flexi-ui/flexi-ui/commit/5542a1b194188817ac0bd3a937ae7f1edb9704ee) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - fix:peer dependencies

- Updated dependencies [[`5542a1b`](https://github.com/flexi-ui/flexi-ui/commit/5542a1b194188817ac0bd3a937ae7f1edb9704ee)]:
  - @flexi-ui/react-rsc-utils@1.0.2
  - @flexi-ui/shared-utils@1.0.2

## 1.0.1

### Patch Changes

- [`6681f57`](https://github.com/flexi-ui/flexi-ui/commit/6681f5752c33c44fb13f2a1445f66b460093a670) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - fix:peer deps

- Updated dependencies [[`6681f57`](https://github.com/flexi-ui/flexi-ui/commit/6681f5752c33c44fb13f2a1445f66b460093a670)]:
  - @flexi-ui/react-rsc-utils@1.0.1

## 1.0.0

### Major Changes

- [`8709641`](https://github.com/flexi-ui/flexi-ui/commit/8709641d02a8c29738a43db857330f22063c3897) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - feat:button, ripple, spinner, use-aria-button, system, system-rscm and it's utilities

### Patch Changes

- Updated dependencies [[`8709641`](https://github.com/flexi-ui/flexi-ui/commit/8709641d02a8c29738a43db857330f22063c3897)]:
  - @flexi-ui/react-rsc-utils@1.0.0
