import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_NATIVE-SELECT', {
  props: {
    className: figma.className([
      'pylon-native-select',
      figma.enum('Size', { sm: 'pylon-native-select--sm', lg: 'pylon-native-select--lg' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
