import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_INPUT', {
  props: {
    className: figma.className([
      'pylon-input',
      figma.enum('Size', { sm: 'pylon-input--sm', lg: 'pylon-input--lg' })
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Input class="${props.className}">${props.label}</Input>`,
})
