import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_DATA-TABLE', {
  props: {
    className: figma.className([
      'pylon-data-table'
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
