# @flexi-ui/styles

## 1.9.1

### Patch Changes

- [#111](https://github.com/flexi-ui/flexi-ui/pull/111) [`d178b88`](https://github.com/flexi-ui/flexi-ui/commit/d178b8899ffb0776dd1c9b0d62051241c82a3228) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - fix(styles): remove invalid `@apply group` from switch and checkbox

  Tailwind v4 no longer allows `@apply group` because `group` is a variant
  marker, not a utility. No `group-*` variants are used within the styles
  package, so the directive was dead code. Removing it unblocks consumers
  like the docs app that import `@flexi-ui/styles/css` through
  `@tailwindcss/postcss`.

## 1.9.0

### Minor Changes

- [#106](https://github.com/flexi-ui/flexi-ui/pull/106) [`fe182af`](https://github.com/flexi-ui/flexi-ui/commit/fe182afaa37af40cedea6e299dc6f0a255500fc2) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add phase 11 feedback and utility primitives: Toast, Group, VisuallyHidden.

## 1.8.0

### Minor Changes

- [#104](https://github.com/flexi-ui/flexi-ui/pull/104) [`293d641`](https://github.com/flexi-ui/flexi-ui/commit/293d64153e08243c056c6ffd711e56880c7d61d9) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add phase 10 components: Text, Heading, Keyboard, DropIndicator.

## 1.7.0

### Minor Changes

- [#102](https://github.com/flexi-ui/flexi-ui/pull/102) [`04c5b04`](https://github.com/flexi-ui/flexi-ui/commit/04c5b04862ee7f62d6f3fa4e86dcb6f82af143b7) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Phase 9 components: Autocomplete, Calendar, RangeCalendar, ColorWheel, ListBox, Dialog

## 1.6.0

### Minor Changes

- [#100](https://github.com/flexi-ui/flexi-ui/pull/100) [`d5930b4`](https://github.com/flexi-ui/flexi-ui/commit/d5930b45e0959b41dad28c932743bf5d75566d7a) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Phase 8 components: ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatch, ColorSwatchPicker, DropZone, Disclosure

## 1.5.0

### Minor Changes

- [#98](https://github.com/flexi-ui/flexi-ui/pull/98) [`f7186ec`](https://github.com/flexi-ui/flexi-ui/commit/f7186ec3f15cfd17600fdd6c756ca9f006cf44dc) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Phase 7 components: ComboBox, DateRangePicker, DateField, TimeField, Table, GridList, Tree

## 1.4.0

### Minor Changes

- [#96](https://github.com/flexi-ui/flexi-ui/pull/96) [`bbaf324`](https://github.com/flexi-ui/flexi-ui/commit/bbaf324f94431476edb5c41ada2d3e117d506e84) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Phase 6 components: Menu, SearchField, Meter, TagGroup, ToggleButton, Toolbar, FileTrigger

## 1.3.0

### Minor Changes

- [#94](https://github.com/flexi-ui/flexi-ui/pull/94) [`723ff94`](https://github.com/flexi-ui/flexi-ui/commit/723ff9435bfc91eaddcfe83087e1aa7b155f4a92) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Phase 5 components: Select, Radio, Slider, Textarea, NumberField, DatePicker, Breadcrumbs

## 1.2.0

### Minor Changes

- [#92](https://github.com/flexi-ui/flexi-ui/pull/92) [`724286b`](https://github.com/flexi-ui/flexi-ui/commit/724286b9cc0d8498dcb738d2d44709e01ac25d7c) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Modal, Tooltip, Popover, Tabs, Accordion, Dropdown, and Progress components

## 1.1.0

### Minor Changes

- [#88](https://github.com/flexi-ui/flexi-ui/pull/88) [`606cbd7`](https://github.com/flexi-ui/flexi-ui/commit/606cbd7677e61dc6188fab95119994c3b24b62e3) Thanks [@muneeb-builds](https://github.com/muneeb-builds)! - Add Card, Badge, Divider, Skeleton, Switch, Checkbox, and Alert components

## 1.0.0

### Major Changes

- [#82](https://github.com/flexi-ui/flexi-ui/pull/82) [`bae2aea`](https://github.com/flexi-ui/flexi-ui/commit/bae2aeab87a8e2036c192100c4a37d25c8c504ee) Thanks [@Muneeb-Mughal-Dev](https://github.com/Muneeb-Mughal-Dev)! - Unified baseline release. Existing packages move to a single shared `6.0.0` line and brand-new packages (`@flexi-ui/avatar`, `@flexi-ui/styles`, plus the seven `use-*` hooks) start at `1.0.0`. No runtime behavior changes — this is a versioning re-alignment so every package in the monorepo ships from a consistent starting point going forward.
