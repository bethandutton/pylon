import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_BADGE', {
  props: {
    className: figma.className([
      'pylon-badge',
      figma.enum('Type', { neutral: 'pylon-badge--neutral', brand: 'pylon-badge--brand', success: 'pylon-badge--success', warning: 'pylon-badge--warning', error: 'pylon-badge--error' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
