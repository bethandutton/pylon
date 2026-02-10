import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_RADIO-GROUP', {
  props: {
    className: figma.className([
      'pylon-radio-group'
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<div class="${props.className}">${props.label}</div>`,
})
