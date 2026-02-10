import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_ALERT', {
  props: {
    className: figma.className([
      'pylon-alert',
      figma.enum('Type', { info: 'pylon-alert--info', success: 'pylon-alert--success', warning: 'pylon-alert--warning', error: 'pylon-alert--error' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
