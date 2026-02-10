import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_CALENDAR', {
  props: {
    className: figma.className([
      'pylon-calendar',
      figma.enum('Type', { outside: 'pylon-calendar--outside' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
