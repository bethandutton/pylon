import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_SHEET', {
  props: {
    className: figma.className([
      'pylon-sheet'
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
