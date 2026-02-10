import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_NAV', {
  props: {
    className: figma.className([
      'pylon-nav',
      figma.enum('Type', { active: 'pylon-nav--active' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
