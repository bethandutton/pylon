import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_BTN', {
  props: {
    className: figma.className([
      'pylon-btn',
      figma.enum('Type', { primary: 'pylon-btn--primary', secondary: 'pylon-btn--secondary', ghost: 'pylon-btn--ghost', danger: 'pylon-btn--danger' }),
      figma.enum('Size', { sm: 'pylon-btn--sm', md: 'pylon-btn--md', lg: 'pylon-btn--lg' })
    ]),
    label: figma.textContent('Label'),
  },
  example: (props) =>
    html`<Button class="${props.className}">${props.label}</Button>`,
})
