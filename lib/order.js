const GROUP_GENERATED = ['content'];

const GROUP_POSITION_LAYOUT = [
  'position', 'z-index', 'top', 'bottom', 'left', 'right',
  // flexbox
  'flex', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex-flow', 'flex-direction', 'flex-wrap',
  // other properties
  'float', 'clear'
];

const GROUP_DISPLAY_VISIBILITY = [
  'display', 'opacity',
  // transform
  'transform', 'transform-box', 'transform-origin', 'transform-style'
];

const GROUP_CLIPPING = [
  // overflow
  'overflow', 'overflow-x', 'overflow-y', 'overflow-block', 'overflow-inline', 'overflow-clip-margin', 'overflow-wrap',
  // clip
  'clip', 'clip-path'
];

const GROUP_ANIMATION = [
  // animation
  'animation', 'animation-duration', 'animation-timing-function', 'animation-delay', 'animation-iteration-count',
  'animation-direction', 'animation-fill-mode', 'animation-play-state', 'animation-name',
  // transition
  'transition', 'transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay'
];

const GROUP_BOX_MODEL = [
  // margin
  'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  // block and inline
  'margin-block', 'margin-block-start', 'margin-block-end', 'margin-inline', 'margin-inline-start', 'margin-inline-end',
  // misc.
  'margin-trim', 'box-shadow',
  // border
  'border', 'border-width', 'border-style', 'border-color', 'border-top', 'border-right', 'border-bottom', 'border-left',
  'border-top-width', 'border-top-style', 'border-top-color',
  'border-right-width', 'border-right-style', 'border-right-color',
  'border-bottom-width', 'border-bottom-style', 'border-bottom-color',
  'border-left-width', 'border-left-style', 'border-left-color',
  // block and inline
  'border-block', 'border-block-width', 'border-block-style', 'border-block-color',
  'border-block-start', 'border-block-start-width', 'border-block-start-style', 'border-block-start-color',
  'border-block-end', 'border-block-end-width', 'border-block-end-style', 'border-block-end-color',
  'border-inline', 'border-inline-width', 'border-inline-style', 'border-inline-color',
  'border-inline-start', 'border-inline-start-width', 'border-inline-start-style', 'border-inline-start-color',
  'border-inline-end', 'border-inline-end-width', 'border-inline-end-style', 'border-inline-end-color',
  // misc.
  'border-collapse', 'border-spacing',
  // border image
  'border-image', 'border-image-source', 'border-image-slice', 'border-image-width',
  'border-image-outset', 'border-image-repeat',
  // border radius
  'border-radius', 'border-top-left-radius', 'border-top-right-radius',
  'border-bottom-right-radius', 'border-bottom-left-radius',
  'border-start-start-radius', 'border-start-end-radius', 'border-end-start-radius', 'border-end-end-radius',
  // box sizing and dimensions
  'box-sizing', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height',
  // padding
  'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  // block and inline
  'padding-block', 'padding-block-start', 'padding-block-end',
  'padding-inline', 'padding-inline-start', 'padding-inline-end'
];

const GROUP_BACKGROUND = [
  'background', 'background-image',
  'background-position', 'background-position-x', 'background-position-y',
  'background-size', 'background-repeat', 'background-attachment', 'background-origin',
  'background-clip', 'background-color', 'background-blend-mode',
  // and the cursor, for some reason
  'cursor'
];

const GROUP_TYPOGRAPHY = [
  // font properties
  'font', 'font-style', 'font-variant', 'font-weight', 'font-size', 'font-family',
  'font-variant-ligatures', 'font-variant-alternates', 'font-variant-caps',
  'font-variant-numeric', 'font-variant-east-asian', 'font-variant-position', 'font-variation-settings',
  'font-size-adjust', 'font-optical-sizing', 'font-stretch', 'font-feature-settings',
  'font-kerning', 'font-language-override', 'font-synthesis',
  // text properties
  'line-height', 'text-align', 'text-transform', 'text-shadow',
  'text-decoration', 'text-decoration-line', 'text-decoration-style', 'text-decoration-color', 'text-decoration-thickness',
  'text-rendering', 'text-overflow', 'text-emphasis', 'text-indent', 'text-justify', 'text-orientation',
  'text-underline-position', 'text-underline-offset', 'text-combine-upright',
  // word properties
  'word-spacing', 'word-break', 'word-wrap', 'overflow-wrap',
  // and color
  'color'
];

export const order = [
  ...GROUP_GENERATED,
  ...GROUP_POSITION_LAYOUT,
  ...GROUP_DISPLAY_VISIBILITY,
  ...GROUP_CLIPPING,
  ...GROUP_ANIMATION,
  ...GROUP_BOX_MODEL,
  ...GROUP_BACKGROUND,
  ...GROUP_TYPOGRAPHY
];
