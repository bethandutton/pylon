import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_LABEL', {
  props: {
    className: figma.className([
      'pylon-label',
      figma.enum('Type', { required: 'pylon-label--required' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
