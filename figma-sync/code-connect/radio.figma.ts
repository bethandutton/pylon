import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_RADIO', {
  props: {
    className: figma.className([
      'pylon-radio'
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Radio class="${props.className}">${props.label}</Radio>`,
})
