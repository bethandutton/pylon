import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_SKELETON', {
  props: {
    className: figma.className([
      'pylon-skeleton'
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
