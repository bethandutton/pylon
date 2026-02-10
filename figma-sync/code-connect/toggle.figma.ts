import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_TOGGLE', {
  props: {
    className: figma.className([
      'pylon-toggle',
      figma.enum('Type', { pressed: 'pylon-toggle--pressed' }),
      figma.enum('Size', { sm: 'pylon-toggle--sm', md: 'pylon-toggle--md', lg: 'pylon-toggle--lg' })
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<ToggleButton class="${props.className}">${props.label}</ToggleButton>`,
})
