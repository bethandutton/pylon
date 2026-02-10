import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_MENU', {
  props: {
    className: figma.className([
      'pylon-menu',
      figma.enum('Type', { danger: 'pylon-menu--danger' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
