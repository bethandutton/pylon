import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_MODAL', {
  props: {
    className: figma.className([
      'pylon-modal',
      figma.enum('Size', { sm: 'pylon-modal--sm', lg: 'pylon-modal--lg' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
