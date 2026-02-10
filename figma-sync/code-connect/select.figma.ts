import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_SELECT', {
  props: {
    className: figma.className([
      'pylon-select'
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Select class="${props.className}">${props.label}</Select>`,
})
