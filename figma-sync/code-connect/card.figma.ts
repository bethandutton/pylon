import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_CARD', {
  props: {
    className: figma.className([
      'pylon-card',
      figma.enum('Type', { shadow: 'pylon-card--shadow', elevated: 'pylon-card--elevated', interactive: 'pylon-card--interactive' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
