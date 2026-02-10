import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_SWITCH', {
  props: {
    className: figma.className([
      'pylon-switch'
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Switch class="${props.className}">${props.label}</Switch>`,
})
