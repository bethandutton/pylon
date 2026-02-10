#!/usr/bin/env bash
# ============================================
# Pylon: Accessibility Check
# Ensures interactive components support
# required React Aria states and focus rings
# ============================================

set -euo pipefail

COMPONENTS_DIR="src/scss/components"
ERRORS=0

echo "Checking accessibility compliance in components..."
echo ""

# List of interactive components that MUST have focus-visible support
INTERACTIVE_COMPONENTS=(
  "_button.scss"
  "_input.scss"
  "_checkbox.scss"
  "_accordion.scss"
  "_calendar.scss"
  "_combobox.scss"
  "_context-menu.scss"
  "_date-picker.scss"
  "_menubar.scss"
  "_modal.scss"
  "_native-select.scss"
  "_pagination.scss"
  "_radio-group.scss"
  "_slider.scss"
  "_toggle.scss"
  "_toggle-group.scss"
  "_nav.scss"
  "_tooltip.scss"
  "_alert-dialog.scss"
  "_sheet.scss"
  "_drawer.scss"
  "_hover-card.scss"
  "_collapsible.scss"
  "_input-otp.scss"
  "_input-group.scss"
  "_command.scss"
  "_button-group.scss"
  "_data-table.scss"
  "_sidebar.scss"
  "_toast.scss"
)

# Check each interactive component for focus-visible support
echo "1. Checking focus-visible support..."
echo ""
for component in "${INTERACTIVE_COMPONENTS[@]}"; do
  filepath="$COMPONENTS_DIR/$component"
  if [ ! -f "$filepath" ]; then
    continue
  fi
  if ! grep -q 'data-focus-visible' "$filepath"; then
    echo "  FAIL  $filepath — missing [data-focus-visible] state"
    echo "        Interactive components must support focus-visible for keyboard navigation"
    echo ""
    ERRORS=$((ERRORS + 1))
  fi
done

# Check that interactive components use the focus ring token
echo "2. Checking focus ring token usage..."
echo ""
for component in "${INTERACTIVE_COMPONENTS[@]}"; do
  filepath="$COMPONENTS_DIR/$component"
  if [ ! -f "$filepath" ]; then
    continue
  fi
  if ! grep -q '\$focus-ring' "$filepath"; then
    echo "  FAIL  $filepath — missing \$focus-ring token"
    echo "        Use box-shadow: \$focus-ring for consistent focus indication"
    echo ""
    ERRORS=$((ERRORS + 1))
  fi
done

# Check that interactive components support disabled state
echo "3. Checking disabled state support..."
echo ""
for component in "${INTERACTIVE_COMPONENTS[@]}"; do
  filepath="$COMPONENTS_DIR/$component"
  if [ ! -f "$filepath" ]; then
    continue
  fi
  if ! grep -q 'data-disabled\|disabled\|aria-disabled' "$filepath"; then
    echo "  WARN  $filepath — no disabled state found"
    echo "        Consider adding [data-disabled] support"
    echo ""
  fi
done

# Check that no component uses outline: none without a replacement
echo "4. Checking for suppressed outlines without replacement..."
echo ""
while IFS=: read -r file line content; do
  echo "  FAIL  $file:$line — outline removed without visible replacement"
  echo "        $content"
  echo "        Use box-shadow: \$focus-ring instead of removing outline"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn 'outline:\s*none\|outline:\s*0' "$COMPONENTS_DIR" \
  --include='*.scss' \
  | grep -v 'focus-ring\|box-shadow' \
  || true)

echo "---"
if [ "$ERRORS" -gt 0 ]; then
  echo "FAILED: $ERRORS accessibility violation(s) found"
  exit 1
else
  echo "PASSED: All accessibility checks passed"
  exit 0
fi
