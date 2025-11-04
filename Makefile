.ONESHELL:
SHELL := /bin/bash

.PHONY: install
install: ## Install project dependencies in dev mode using pnpm
	@echo "Installing dependencies using pnpm..."
	@pnpm install

.PHONY: clean
clean: ## Clean unused files, build artifacts, and Nx caches
	@echo "Cleaning project..."
	# Remove .tsbuildinfo, *~ files from all directories
	@find ./ -name '*.tsbuildinfo' -exec rm -f {} \;
	@find ./ -name '*~' -exec rm -f {} \;
	# Remove node_modules, dist directories from all subdirectories
	@find ./ -type d \( -name 'node_modules' -or -name 'dist' -or -name '.next' \) -exec rm -rf {} \;
	# Remove common cache and build artifacts
	@rm -rf .cache
	@rm -rf .nx
	@rm -rf .pnpm-store
	@rm -rf docs/_build
	@rm -rf *.log
	@echo "Removing nc cache..."
	@rm -rf .nc-cache

.PHONY: format
format: ## Format code using Prettier
	@echo "Formatting the codebase..."
	@pnpm format

.PHONY: lint
lint: ## Run ESLint on the codebase
	@echo "Linting the codebase..."
	@pnpm lint

.PHONY: build
build: ## Build all packages using Nx
	@echo "Building all packages..."
	@pnpm build

.PHONY: dev
dev: ## Run all packages in development mode
	@echo "Starting development mode..."
	@pnpm dev

.PHONY: test
test: ## Run tests using Jest
	@echo "Running tests..."
	@pnpm test

.PHONY: component
component: ## Create a new component package
	@echo "🎨 Creating a new component package..."
	@read -p "Enter component name (e.g., accordion): " COMPONENT_NAME; \
	if [ -z "$$COMPONENT_NAME" ]; then \
		echo "❌ Error: Component name cannot be empty"; \
		exit 1; \
	fi; \
	PACKAGE_DIR="packages/components/$$COMPONENT_NAME"; \
	if [ -d "$$PACKAGE_DIR" ]; then \
		echo "❌ Error: Package '$$COMPONENT_NAME' already exists at $$PACKAGE_DIR"; \
		exit 1; \
	fi; \
	echo "📁 Creating directory structure..."; \
	mkdir -p "$$PACKAGE_DIR/src"; \
	mkdir -p "$$PACKAGE_DIR/stories"; \
	echo "📝 Creating tsconfig.json..."; \
	cat > "$$PACKAGE_DIR/tsconfig.json" <<-'TSCONFIG'
	{
	  "extends": "../../../tsconfig.json",
	  "compilerOptions": {
	    "paths": {
	      "tailwind-variants": ["../../../node_modules/tailwind-variants"]
	    }
	  },
	  "include": ["src", "main.ts"]
	}
	TSCONFIG
	echo "📝 Creating package.json..."; \
	cat > "$$PACKAGE_DIR/package.json" <<-PKG
	{
	  "name": "@flexi-ui/$$COMPONENT_NAME",
	  "version": "1.0.0",
	  "description": "",
	  "type": "module",
	  "license": "MIT",
	  "publishConfig": {
	    "access": "public"
	  },
	  "author": {
	    "name": "Muneeb Mughal",
	    "email": "muneeb.it.dev@gmail.com",
	    "url": "https://github.com/Muneeb-Mughal-Dev"
	  },
	  "homepage": "https://github.com/awalsolution",
	  "repository": {
	    "type": "git",
	    "url": "https://github.com/flexi-ui/flexi-ui.git"
	  },
	  "bugs": {
	    "url": "https://github.com/flexi-ui/flexi-ui/issues"
	  },
	  "keywords": [
	    "$$COMPONENT_NAME"
	  ],
	  "files": [
	    "dist"
	  ],
	  "main": "./src/main.ts",
	  "scripts": {
	    "build": "tsc && vite build",
	    "dev:watch": "pnpm build --watch",
	    "prepack": "clean-package",
	    "postpack": "clean-package restore",
	    "typecheck": "tsc --noEmit",
	    "clean": "rm -rf node_modules dist"
	  },
	  "peerDependencies": {
	    "react": ">=18 || >=19.0.0-rc.0",
	    "react-dom": ">=18 || >=19.0.0-rc.0",
	    "@flexi-ui/theme": ">=2.1.1",
	    "@flexi-ui/system": ">=1.1.0"
	  },
	  "dependencies": {
	  },
	  "clean-package": "../../../clean-package.config.json",
	  "devDependencies": {
	    "clean-package": "2.2.0",
	    "@flexi-ui/system": "workspace:*",
	    "@flexi-ui/theme": "workspace:*",
	    "@storybook/react": "^8.4.7",
	    "@types/react": "catalog:",
	    "@types/react-dom": "catalog:",
	    "react": "catalog:",
	    "react-dom": "catalog:",
	    "vite": "catalog:",
	    "vite-plugin-dts": "catalog:"
	  }
	}
	PKG
	echo "📝 Creating README.md..."; \
	cat > "$$PACKAGE_DIR/README.md" <<-README
	# @flexi-ui/$$COMPONENT_NAME

	## Installation

	\`\`\`sh
	yarn add @flexi-ui/$$COMPONENT_NAME
	# or
	npm i @flexi-ui/$$COMPONENT_NAME
	\`\`\`
	README
	echo "📝 Creating vite.config.ts..."; \
	cat > "$$PACKAGE_DIR/vite.config.ts" <<-'VITE'
	import { createViteConfig } from '../../../vite.config'

	export default createViteConfig()
	VITE
	echo "✅ Component package '$$COMPONENT_NAME' created successfully at $$PACKAGE_DIR"; \
	npx prettier --write $$PACKAGE_DIR
	echo ""; \
	echo "Next steps:"; \
	echo "  1. Add your component code in $$PACKAGE_DIR/src/"; \
	echo "  2. Add stories in $$PACKAGE_DIR/stories/"; \
	echo "  3. Run 'pnpm install' to update workspace dependencies"; \
	echo "  4. Run 'make build' to build the package"

.PHONY: hook
hook: ## Create a new hook package
	@echo "🪝 Creating a new hook package..."
	@read -p "Enter hook name (e.g., use-toggle): " HOOK_NAME; \
	if [ -z "$$HOOK_NAME" ]; then \
		echo "❌ Error: Hook name cannot be empty"; \
		exit 1; \
	fi; \
	PACKAGE_DIR="packages/hooks/$$HOOK_NAME"; \
	if [ -d "$$PACKAGE_DIR" ]; then \
		echo "❌ Error: Hook '$$HOOK_NAME' already exists at $$PACKAGE_DIR"; \
		exit 1; \
	fi; \
	echo "📁 Creating directory structure..."; \
	mkdir -p "$$PACKAGE_DIR/src"; \
	echo "📝 Creating tsconfig.json..."; \
	cat > "$$PACKAGE_DIR/tsconfig.json" <<-'TSCONFIG'
	{
	  "extends": "../../../tsconfig.json",
	  "include": ["src", "main.ts"]
	}
	TSCONFIG
	echo "📝 Creating package.json..."; \
	cat > "$$PACKAGE_DIR/package.json" <<-PKG
	{
	  "name": "@flexi-ui/$$HOOK_NAME",
	  "version": "1.0.0",
	  "description": "",
	  "type": "module",
	  "license": "MIT",
	  "publishConfig": {
	    "access": "public"
	  },
	  "author": {
	    "name": "Muneeb Mughal",
	    "email": "muneeb.it.dev@gmail.com",
	    "url": "https://github.com/Muneeb-Mughal-Dev"
	  },
	  "homepage": "https://github.com/awalsolution",
	  "repository": {
	    "type": "git",
	    "url": "https://github.com/flexi-ui/flexi-ui.git"
	  },
	  "bugs": {
	    "url": "https://github.com/flexi-ui/flexi-ui/issues"
	  },
	  "keywords": [
	    "$$HOOK_NAME"
	  ],
	  "files": [
	    "dist/*"
	  ],
	  "main": "./src/main.ts",
	  "scripts": {
	    "build": "tsc && vite build",
	    "dev:watch": "pnpm build --watch",
	    "prepack": "clean-package",
	    "postpack": "clean-package restore",
	    "typecheck": "tsc --noEmit",
	    "clean": "rm -rf node_modules dist"
	  },
	  "peerDependencies": {
	  },
	  "clean-package": "../../../clean-package.config.json",
	  "dependencies": {
	  },
	  "devDependencies": {
	    "clean-package": "2.2.0",
	    "vite": "catalog:",
	    "vite-plugin-dts": "catalog:"
	  }
	}
	PKG
	echo "📝 Creating README.md..."; \
	cat > "$$PACKAGE_DIR/README.md" <<-README
	# @flexi-ui/$$HOOK_NAME

	## Installation

	\`\`\`sh
	yarn add @flexi-ui/$$HOOK_NAME
	# or
	npm i @flexi-ui/$$HOOK_NAME
	\`\`\`
	README
	echo "📝 Creating vite.config.ts..."; \
	cat > "$$PACKAGE_DIR/vite.config.ts" <<-'VITE'
	import { createViteConfig } from '../../../vite.config'

	export default createViteConfig()
	VITE
	echo "✅ Hook package '$$HOOK_NAME' created successfully at $$PACKAGE_DIR"; \
	npx prettier --write $$PACKAGE_DIR
	echo ""; \
	echo "Next steps:"; \
	echo "  1. Add your hook code in $$PACKAGE_DIR/src/"; \
	echo "  2. Run 'pnpm install' to update workspace dependencies"; \
	echo "  3. Run 'make build' to build the package"


.PHONY: help
help: ## Show available commands
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*## ' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS=":.*## "}{printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
