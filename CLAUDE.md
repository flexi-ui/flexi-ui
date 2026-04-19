# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

FlexiUI is a modern React UI library built with Tailwind CSS v4, using a pnpm monorepo structure managed by Nx. Each component is published as a separate package (`@flexi-ui/button`, `@flexi-ui/spinner`, etc.) so users install only what they need.

### Key Technical Stack

- **Node.js**: v22+ required
- **pnpm**: v9.6.0 (package manager)
- **React**: v19+
- **Tailwind CSS**: v4+
- **TypeScript**: v5.7+
- **Nx**: Build orchestration
- **Storybook**: Component development
- **Vitest**: Testing framework
- **Changesets**: Version management & publishing

## Development Commands

### Core Development Commands

```bash
# Install dependencies
pnpm install

# Start Storybook for component development
pnpm dev

# Start documentation site
pnpm dev:docs

# Build all packages
pnpm build

# Run linting
pnpm lint

# Run tests
pnpm test

# Run formatting
pnpm format

# Run type checking
pnpm typecheck
```

### Package-Specific Commands

- Use Nx filtering: `npx nx run @flexi-ui/button:build`
- Or pnpm filtering: `pnpm --filter @flexi-ui/button build`

### Changeset Workflow

```bash
# Add a changeset for your changes
pnpm changeset:add

# Version packages based on changesets
pnpm changeset:version

# Publish packages to npm
pnpm changeset:release
```

## Git Commit Convention

**IMPORTANT**: This repository uses conventional commits with strict validation via commitlint. All commits must follow this format:

```
<type>(<scope>): <message>
```

### Allowed Types:

- `feat`: New features
- `fix`: Bug fixes
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `style`: Code style changes (formatting, not CSS)
- `test`: Test changes
- `chore`: Other changes
- `ci`: CI configuration changes

### Examples:

```bash
git commit -m "feat(button): add new loading state prop"
git commit -m "fix(spinner): resolve animation flicker issue"
git commit -m "docs: update installation guide"
git commit -m "ci: add Claude Code GitHub Action workflow"
```

**Note**: Commits without proper format will be rejected by git hooks.

## Repository Architecture

### Monorepo Structure

```
/
├── apps/
│   └── documentation/       # Documentation site (Next.js)
├── packages/
│   ├── components/          # Individual component packages (one dir per @flexi-ui/* component)
│   ├── hooks/               # Shared React hooks (one dir per @flexi-ui/use-* package)
│   ├── utilities/           # Shared utilities
│   │   ├── shared-utils/    # clsx + runtime helpers
│   │   ├── shared-icons/    # Icon typings
│   │   └── test-utils/      # Testing helpers
│   ├── styles/              # CSS styling layer (BEM + Tailwind)
│   ├── standard/            # Shared ESLint, Prettier, TypeScript configs
│   ├── storybook/           # Storybook configuration
│   ├── storage/             # Standalone storage utilities
│   └── vitest/              # Shared Vitest configurations
├── nx.json                  # Nx configuration
└── pnpm-workspace.yaml      # Workspace definition
```

### Component Architecture Pattern

Each component in `packages/components/` is a separate publishable package following this structure:

```
component-name/
├── src/
│   ├── component-name.tsx       # Main component (compound pattern + React Aria Components)
│   ├── component-name.styles.ts # Tailwind Variants styling (tv())
│   ├── use-component-name.ts    # Component hook (if needed)
│   ├── main.ts                  # Barrel exports
│   └── ...
├── stories/
│   └── component-name.stories.tsx # Storybook stories
├── package.json
├── tsconfig.json
└── vite.config.ts
```

**IMPORTANT**: All Storybook stories must use the "Components" group in their title. For example: `title: "Components/Card"`, `title: "Components/Button"`, etc.

### CSS Class Naming Convention

**IMPORTANT**: FlexiUI uses BEM (Block Element Modifier) style for CSS classes to ensure predictable and maintainable styling:

- **Block**: The main component class (e.g., `button`, `card`, `alert`)
- **Modifier**: Variations of the component using double dashes (e.g., `button--primary`, `button--lg`, `button--icon-only`)
- **Element**: Child elements within a component (e.g., `card__header`, `alert__icon`)

Components use CSS files in `@flexi-ui/styles` with `tv()` from `tailwind-variants` to map variant props to BEM class names.

**Default Size Pattern**:

**CRITICAL**: All components MUST include default sizes in their base classes to prevent broken appearances when no size modifier is specified:

- **Base classes** include default dimensions (equivalent to the `--md` variant)
- **Medium variants** (`--md`) are empty with explanatory comments
- **Size modifiers** override the defaults when specified

Example implementation:

```css
/* Base component with default size */
.avatar {
  @apply relative flex size-10 shrink-0 overflow-hidden rounded-full;
  /* size-10 is the default, equivalent to --md */
}

/* Size variants */
.avatar--sm {
  @apply size-8; /* Override default */
}

.avatar--md {
  /* No styles as this is the default size */
}

.avatar--lg {
  @apply size-12; /* Override default */
}
```

### Core Component Design Principles

**IMPORTANT**: FlexiUI follows a compound component pattern similar to Radix UI, built on top of React Aria Components primitives. This enables maximum flexibility and customization for users.

### React Aria Components Integration

**CRITICAL**: Before implementing any component, you MUST:

1. Visit React Aria Components docs: https://react-spectrum.adobe.com/react-aria/
2. Study the specific component's API and examples
3. Understand its accessibility features and ARIA patterns
4. Plan the transformation from React Aria's prop-based API to Radix UI's composition-based API

React Aria provides the accessibility foundation, but we transform their API to match Radix UI's compound component pattern for better customization.

#### 1. **Compound Component Pattern**:

- Export all internal component pieces (Root, Item, Trigger, Content, etc.)
- Each piece can be styled and composed independently
- Users can customize render logic without accessing internal code
- Button uses Ripple component for press feedback

#### 2. **Export Strategy**:

```typescript
// Compound component default export
const CompoundComponent = Object.assign(ComponentRoot, {
  Item: ComponentItem,
  Trigger: ComponentTrigger,
  Content: ComponentContent,
});

export default CompoundComponent;

// Named type exports
export type { ComponentRootProps, ComponentItemProps };

// Always export variants
export { componentVariants, type ComponentVariants } from "./component-name.styles";
```

#### 3. **Component Structure for Compound Components**:

```typescript
// Context for sharing state/styles
const ComponentContext = createContext<{ slots?: ReturnType<typeof componentVariants> }>({});

// Root component wraps with context (render-prop-capable RAC primitive)
const ComponentRoot = React.forwardRef<...>(({ children, className, ...props }, ref) => {
  const slots = React.useMemo(() => componentVariants({ ... }), [...]);

  return (
    <ComponentContext value={{ slots }}>
      <ReactAriaComponent
        ref={ref}
        className={(renderProps) =>
          cx(slots.base(), typeof className === 'function' ? className(renderProps) : className) ?? ''
        }
      >
        {children}
      </ReactAriaComponent>
    </ComponentContext>
  );
});

// Child components consume context (string-only className primitive)
const ComponentItem = React.forwardRef<...>(({ className, ...props }, ref) => {
  const { slots } = useContext(ComponentContext);

  return (
    <ReactAriaComponent ref={ref} className={cx(slots?.item(), className) ?? ''}>
      {props.children}
    </ReactAriaComponent>
  );
});
```

#### 4. **Key Implementation Details**:

1. **Styling with Tailwind Variants**:
   - Styles defined in `.styles.ts` files using `tv()` function from `tailwind-variants`
   - **IMPORTANT**: Always import from `tailwind-variants`, never from `@flexi-ui/standard`
   - **CRITICAL**: tailwind-variants already includes `twMerge` functionality, so NEVER manually use `twMerge`
   - **CRITICAL**: Use `cx` from `tailwind-variants` to compose class strings — NEVER use the removed `composeTwRenderProps` helper
   - **RULE**: All component styles MUST be defined in separate `.styles.ts` files, NOT in the component implementation files
   - Example imports:
     ```typescript
     import type { VariantProps } from "tailwind-variants";
     import { tv, cx } from "tailwind-variants";
     ```

2. **Component Features**:
   - Built on React Aria Components for accessibility
   - Use `forwardRef` for all components
   - Display names follow: `FlexiUI.ComponentName` or `FlexiUI.Component.SubPart`
   - Support render props from React Aria when available
   - Button supports Ripple effect via `@flexi-ui/ripple`

3. **Type Exports**:

   ```typescript
   export type ComponentRootProps = { ... }
   export type ComponentItemProps = { ... }
   export type ComponentVariants = VariantProps<typeof componentVariants>
   ```

4. **React Aria Components className Patterns**:

   **CRITICAL**: React Aria components have different className prop behaviors. In both cases, compose with `cx` from `tailwind-variants` — never use `composeTwRenderProps` or `twMerge`.

   **Components that support render-prop className** (className can be a function):
   - Button, TextField, FieldError, Checkbox, CheckboxGroup
   - Switch, RadioGroup, Radio, Slider
   - Popover, Tooltip, Tabs, Link, Menu, MenuItem, Group, DropZone

   ```tsx
   className={(renderProps) =>
     cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
   }
   ```

   **Components that ONLY accept string className** (pass className directly):
   - Label, Text, Input, TextArea, Keyboard, VisuallyHidden
   - Heading, Dialog, OverlayArrow, DropIndicator, Toast, ToastContent

   ```tsx
   className={cx(styles, className) ?? ''}
   ```

5. **Composition Pattern with Existing Components**:

   **CRITICAL**: FlexiUI follows a composition-based approach. Components should reuse existing primitives rather than creating component-specific versions.

   - **DO NOT** create component-specific Label, Description, or FieldError components
   - **DO** reuse existing shared components
   - **DO** use standard HTML composition patterns with `htmlFor`/`id` attributes

### Current Components

Each component lives as its own publishable package under `packages/components/`. Run `ls packages/components` for the authoritative list — do not rely on this README to enumerate them.

## Development Workflow

### Standard Feature Development Process

**IMPORTANT**: When working on any feature or improvement, Claude Code MUST follow this systematic workflow:

1. **Research Phase**:
   - Thoroughly research the feature/component requirements
   - Study relevant documentation (React Aria, Tailwind CSS, etc.)
   - Analyze existing similar implementations in the codebase
   - Identify all dependencies and integration points

2. **Planning Phase**:
   - Create a detailed implementation plan with a comprehensive checklist
   - Break down the task into specific, measurable steps
   - Include testing and verification steps in the plan
   - Present the plan for review before proceeding

3. **Review & Correction Phase**:
   - Review the plan for completeness and accuracy
   - Make necessary corrections or adjustments
   - Ensure all edge cases are considered
   - Confirm the plan aligns with FlexiUI patterns and conventions

4. **Execution Phase**:
   - Start executing the plan step by step
   - Use the TodoWrite tool to track progress automatically
   - Mark todos as in_progress when starting a task
   - Mark todos as completed immediately after finishing each step
   - Never batch completions - update status in real-time

5. **Verification Phase**:
   - Manually verify all changes work as expected
   - Run lint and type checks: `pnpm lint && pnpm typecheck`
   - Ensure all tests pass: `pnpm test`

### Component Development Workflow

1. **Creating New Components**:

   **CRITICAL: Research & Design Phase**:
   - **FIRST**: Check the Figma design for the component breakdown
   - **SECOND**: Research the React Aria Components documentation at https://react-spectrum.adobe.com/react-aria/
   - Find the appropriate React Aria primitive
   - Understand the React Aria API, props, and accessibility features
   - Plan how to adapt it to follow Radix UI's compound component pattern

   **Component Structure**:

   ```bash
   # Create new component package
   mkdir -p packages/components/component-name/src
   mkdir -p packages/components/component-name/stories

   # Required files:
   # src/component-name.tsx      - Main component
   # src/component-name.styles.ts - Styles with tv()
   # src/main.ts                  - Barrel exports
   # package.json                 - Package config
   # tsconfig.json               - TypeScript config
   # vite.config.ts              - Build config
   ```

   **Implementation Steps**:
   - Use React Aria Components as the foundation for accessibility
   - Transform React Aria's API to match Radix UI compound patterns
   - Create Context for sharing styles across component parts
   - Export ALL component parts for maximum customization
   - Define styles in separate `.styles.ts` file with slot system
   - Add "use client" directive at the top of component file
   - Create Storybook stories showing all variants and compositions

   **Example Compound Component Export**:

   ```typescript
   const CompoundAccordion = Object.assign(Accordion, {
     Item: AccordionItem,
     Heading: AccordionHeading,
     Trigger: AccordionTrigger,
     Panel: AccordionPanel,
     Indicator: AccordionIndicator,
     Body: AccordionBody,
   });

   export type {
     AccordionProps,
     AccordionItemProps,
     AccordionTriggerProps,
     AccordionPanelProps,
     AccordionIndicatorProps,
     AccordionBodyProps,
   };

   export default CompoundAccordion;
   ```

   **IMPORTANT**: The compound component should be exported as the default export.

2. **Testing**:
   - Run `pnpm test` for all tests
   - Run `pnpm test <component>` for specific component
   - Ensure all new features have tests

3. **Documentation**:
   - Docs live in `apps/documentation/content/`
   - Uses MDX format
   - FlexiUI components are pre-imported

4. **Version Management**:
   - Uses [Changesets](https://github.com/changesets/changesets) for version management
   - Run `pnpm changeset:add` to create a changeset describing your changes
   - Follow semantic versioning

## Icon Library

**IMPORTANT**: FlexiUI uses Iconify with gravity-ui as the default icon set.

```tsx
import { Icon } from '@iconify/react';

<Icon icon="gravity-ui:person" />
<Icon icon="gravity-ui:chevron-down" />
```

## Important Notes

- Always prefer editing existing files over creating new ones
- **NEVER** create documentation files (*.md, *.mdx, README files) unless explicitly requested by the user
- Follow the established component patterns and conventions
- Ensure accessibility with React Aria Components
- Maintain TypeScript type safety
- Use the commit convention to avoid git hook failures
- Run lint and type checks before committing: `pnpm lint && pnpm typecheck`
- Each component is a separate npm package - maintain proper `peerDependencies`
- Button uses Ripple component - keep `@flexi-ui/ripple` as a dependency

## Tailwind CSS Class Detection Rules

**CRITICAL**: Tailwind CSS scans files as plain text and requires complete class names to be statically detectable.

### Key Rules:

1. **Never construct class names dynamically**

   ```jsx
   // BAD:
   <div className={`text-${color}-600`} />

   // GOOD:
   <div className={error ? "text-red-600" : "text-green-600"} />
   ```

2. **Use object mappings for dynamic classes**

   ```jsx
   // BAD:
   <button className={`bg-${color}-600`} />

   // GOOD:
   const colorVariants = {
     blue: "bg-blue-600 hover:bg-blue-500",
     red: "bg-red-600 hover:bg-red-500",
   };
   <button className={colorVariants[color]} />
   ```

3. **For BEM-style classes, use complete mappings**

   ```jsx
   const sizeClasses = {
     sm: "button--sm",
     md: "button--md",
     lg: "button--lg",
   };
   className={sizeClasses[size]}
   ```

## Figma Integration & MCP Server Rules

### Figma Dev Mode MCP Server

**IMPORTANT**: When creating components with Figma designs:

1. **Component Breakdown**: Use Figma designs as reference for component structure, visual styling, and composition patterns.

2. **MCP Server Rules**:
   - **CRITICAL**: If the Figma MCP Server returns a localhost source for an image or SVG, use that source directly
   - **DO NOT** import or add new icon packages - use assets from the Figma payload
   - **DO NOT** use or create placeholders if a localhost source is provided

## Library Documentation with Context7 MCP

**IMPORTANT**: We have the Context7 MCP server available for accessing up-to-date library documentation.

### When to Use Context7

- **Tailwind CSS v4**: When working with Tailwind CSS v4 features
- **Next.js**: For Next.js specific features and APIs used in the docs app
- Any other third-party libraries where up-to-date documentation is needed

### How to Use Context7

1. First, resolve the library ID using `mcp__context7__resolve-library-id`
2. Then fetch documentation using `mcp__context7__get-library-docs` with the resolved ID

## Agent-Specific Guidelines

### For style-migrator and tailwind-v4-css-expert Agents

When working with FlexiUI CSS components, follow these critical patterns:

#### Default Size Implementation

**REQUIRED**: All CSS components MUST follow the default size pattern:

1. **Base classes** include default dimensions equivalent to `--md` variant
2. **Medium variant** (`--md`) is an empty class with explanatory comment
3. **Size variants** override the base defaults

```css
.component {
  @apply [base-styles];
  @apply [default-size-classes];
}

.component--sm {
  @apply [small-overrides];
}

.component--md {
  /* No styles as this is the default size */
}

.component--lg {
  @apply [large-overrides];
}
```

#### Pseudo-Class Fallback Pattern

**REQUIRED**: All interactive components MUST include both pseudo-class and data-attribute support:

```css
.component {
  &:hover,
  &[data-hovered="true"] {
    @apply [hover-styles];
  }

  &:active,
  &[data-pressed="true"] {
    @apply [active-styles];
  }

  &:focus-visible,
  &:focus:not(:focus-visible),
  &[data-focus-visible="true"] {
    outline: 2px solid var(--focus);
    outline-offset: 2px;
  }

  &:disabled,
  &[aria-disabled="true"] {
    @apply pointer-events-none opacity-[var(--disabled-opacity)];
    cursor: var(--cursor-disabled);
  }
}
```

These patterns ensure components never appear broken and maintain consistency across the design system.
