import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_ALERT-DIALOG', {
  props: {
    className: figma.className([
      'pylon-alert-dialog',
      figma.enum('Type', { danger: 'pylon-alert-dialog--danger', warning: 'pylon-alert-dialog--warning', info: 'pylon-alert-dialog--info', success: 'pylon-alert-dialog--success' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
