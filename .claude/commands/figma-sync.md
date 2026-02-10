---
description: Sync Pylon design tokens from SCSS to Figma variables
allowed-tools: Bash, Read, Write, Edit, Glob, Grep, mcp__figma-console__figma_execute, mcp__figma-console__figma_get_console_logs, mcp__figma-console__figma_get_status
---

# Figma Token Sync

Sync Pylon's SCSS design tokens to Figma variables in the "Pylon Design System" file.

## Prerequisites

Before running, verify:
1. Figma Desktop is open with "Pylon Design System" file
2. Desktop Bridge plugin is running (check with `figma_get_status`)
3. If not connected, tell the user to open the Desktop Bridge plugin in Figma

## Steps

### 1. Check Figma connection
Use `figma_get_status` to verify the WebSocket connection is active and the correct file is open.

### 2. Extract tokens from SCSS
Run: `cd /Users/bethandutton/Desktop/pylon/figma-sync && npm run extract`

This parses `src/scss/_tokens.scss` and `src/scss/_theme.scss` into `figma-sync/tokens.json`.

### 3. Generate Figma scripts
Run: `cd /Users/bethandutton/Desktop/pylon/figma-sync && npm run generate:variables`

This reads `tokens.json` and generates 4 scripts in `figma-sync/figma-scripts/`:
- `01-create-color-variables.js` — Colors (Light + Dark modes)
- `02-create-typography-variables.js` — Typography (font-size, weight, line-height in px, letter-spacing)
- `03-create-spacing-variables.js` — Spacing scale
- `04-create-radii-variables.js` — Border radii

### 4. Execute each script in Figma
Read each script file and execute it via `figma_execute`. Run them in order (01, 02, 03, 04).

For each script:
1. Read the file content with the Read tool
2. Execute via `figma_execute` with the file content as the `code` parameter and `timeout: 15000`
3. Check `figma_get_console_logs` to verify success
4. Report the result before moving to the next script

### 5. Report results
After all 4 scripts complete, summarise how many variables were synced in each collection.

## Figma API rules

CRITICAL — these are hard requirements for all Figma Plugin API code:
- `createVariable(name, collection, type)` — pass collection OBJECT, not `collection.id`
- `setVariableCodeSyntax("WEB", value)` — NOT `.codeSyntax = { WEB: value }`
- `console.log()` for output — NOT `return` or `figma.notify()`
- NEVER call `figma.closePlugin()` — it kills the Desktop Bridge
- Top-level `await` — no IIFE wrapper needed
- Fill colours: `{ r, g, b }` only — no `a` property

## Optional: sync specific collection

If the user specifies `$ARGUMENTS`, only sync that collection:
- "colors" → run only 01
- "typography" → run only 02
- "spacing" → run only 03
- "radii" → run only 04
- No argument → run all 4
