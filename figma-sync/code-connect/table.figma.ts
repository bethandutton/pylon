import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_TABLE', {
  props: {
    className: figma.className([
      'pylon-table',
      figma.enum('Type', { striped: 'pylon-table--striped' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
