#!/usr/bin/env bash
# ============================================
# Pylon: No Custom Styling Test
# Ensures components use text-style() mixin
# instead of manual font-size/weight/line-height
# ============================================

set -euo pipefail

COMPONENTS_DIR="src/scss/components"
ERRORS=0

echo "Checking for custom text styling in components..."
echo ""

# Check for manual font-size declarations (should use text-style mixin)
while IFS=: read -r file line content; do
  echo "  FAIL  $file:$line — manual font-size found"
  echo "        $content"
  echo "        Use @include text-style('name') instead"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn 'font-size:' "$COMPONENTS_DIR" \
  --include='*.scss' \
  || true)

# Check for manual font-weight declarations
while IFS=: read -r file line content; do
  echo "  FAIL  $file:$line — manual font-weight found"
  echo "        $content"
  echo "        Use @include text-style('name') instead"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn 'font-weight:' "$COMPONENTS_DIR" \
  --include='*.scss' \
  || true)

# Check for manual line-height declarations
while IFS=: read -r file line content; do
  echo "  FAIL  $file:$line — manual line-height found"
  echo "        $content"
  echo "        Use @include text-style('name') instead"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn 'line-height:' "$COMPONENTS_DIR" \
  --include='*.scss' \
  || true)

# Check for manual letter-spacing declarations
while IFS=: read -r file line content; do
  echo "  FAIL  $file:$line — manual letter-spacing found"
  echo "        $content"
  echo "        Use @include text-style('name') instead"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn 'letter-spacing:' "$COMPONENTS_DIR" \
  --include='*.scss' \
  || true)

# Check for standalone color: (not background-color, border-color, etc.)
# This catches text color set manually instead of via text-style
while IFS=: read -r file line content; do
  # Skip lines that are background-color, border-color, outline-color, etc.
  if echo "$content" | grep -qE '(background-color|border-color|outline-color|accent-color|caret-color|column-rule-color|text-decoration-color|stop-color|flood-color|lighting-color)'; then
    continue
  fi
  # Skip lines that are CSS custom property definitions (--pylon-color-*)
  if echo "$content" | grep -qE '\-\-pylon'; then
    continue
  fi
  # Skip lines that reference a variable ($color-*)
  if echo "$content" | grep -qE '\$color-'; then
    continue
  fi
  # Skip lines inside color: inherit or color: transparent or color: currentColor
  if echo "$content" | grep -qiE 'color:\s*(inherit|transparent|currentColor)'; then
    continue
  fi
  echo "  FAIL  $file:$line — manual color found"
  echo "        $content"
  echo "        Use @include text-style('name') or a token variable instead"
  echo ""
  ERRORS=$((ERRORS + 1))
done < <(grep -rn '^\s*color:' "$COMPONENTS_DIR" \
  --include='*.scss' \
  || true)

echo "---"
if [ "$ERRORS" -gt 0 ]; then
  echo "FAILED: $ERRORS custom styling violation(s) found"
  echo "All text styling must use @include text-style('name') from _typography.scss"
  exit 1
else
  echo "PASSED: No custom text styling found in components"
  exit 0
fi
