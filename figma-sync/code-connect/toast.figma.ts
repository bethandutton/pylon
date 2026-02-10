import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_TOAST', {
  props: {
    className: figma.className([
      'pylon-toast',
      figma.enum('Type', { success: 'pylon-toast--success', error: 'pylon-toast--error', warning: 'pylon-toast--warning', info: 'pylon-toast--info' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
