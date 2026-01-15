# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- Always use `pnpm` for package management (not npm or yarn)

## Project Overview

Learning project based on "The Art of Unit Testing" book (단위 테스트의 기술). Code examples are organized by chapter in `src/ch{N}/` with corresponding tests in `test/ch{N}/`.

## Commands

```bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Run single test file
pnpm test test/ch3/password-verifier.test.ts

# Run tests matching pattern
pnpm test -t "verifyPassword"
```

## Architecture

- **src/ch{N}/**: Chapter-specific implementations (password-verifier variations)
- **test/ch{N}/**: Corresponding test files
- **src/lib/**: Shared utilities (logger, configuration-service)
- **src/types.ts**: Common types (`Rule`, `VerificationError`)
- **docs/**: Korean chapter summaries

## Key Patterns

- Path alias `@/*` maps to `./src/*`
- Uses ESM modules (`"type": "module"`)
- Tests use Vitest with `describe`/`it`/`expect` from vitest
- Dependency injection patterns vary by chapter (parameter injection, module injection, constructor injection)
