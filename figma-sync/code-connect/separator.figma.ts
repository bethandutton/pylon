import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_SEPARATOR', {
  props: {
    className: figma.className([
      'pylon-separator',
      figma.enum('Type', { with-text: 'pylon-separator--with-text' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
