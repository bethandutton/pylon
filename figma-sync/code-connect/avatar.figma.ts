import figma, { html } from '@figma/code-connect/html'

figma.connect('https://figma.com/design/YOUR_FILE_KEY?node-id=PLACEHOLDER_AVATAR', {
  props: {
    className: figma.className([
      'pylon-avatar',
      figma.enum('Size', { sm: 'pylon-avatar--sm', md: 'pylon-avatar--md', lg: 'pylon-avatar--lg', xl: 'pylon-avatar--xl' })
    ]),
  },
  example: (props) =>
    html`<div class="${props.className}">...</div>`,
})
