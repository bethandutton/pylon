import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_EMPTY', {
  props: {
    className: figma.className([
      'pylon-empty'
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
