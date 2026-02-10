import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_CHECKBOX', {
  props: {
    className: figma.className([
      'pylon-checkbox'
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Checkbox class="${props.className}">${props.label}</Checkbox>`,
})
