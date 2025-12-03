/**
 * Enhanced custom utilities
 * Based on HeroUI v3 custom utilities improvements
 */
export default {
  /**
   * Inherit utilities
   */
  '.leading-inherit': {
    'line-height': 'inherit',
  },
  '.bg-img-inherit': {
    'background-image': 'inherit',
  },
  '.bg-clip-inherit': {
    'background-clip': 'inherit',
  },
  '.text-fill-inherit': {
    '-webkit-text-fill-color': 'inherit',
  },
  /**
   * Tap highlight
   */
  '.tap-highlight-transparent': {
    '-webkit-tap-highlight-color': 'transparent',
  },
  /**
   * Input utilities
   */
  '.input-search-cancel-button-none': {
    '&::-webkit-search-cancel-button': {
      '-webkit-appearance': 'none',
    },
  },
  /**
   * Outline utilities
   */
  '.outline-hidden': {
    outline: '2px solid transparent',
    'outline-offset': '2px',
  },
  /**
   * Transform utilities
   */
  '.transform-gpu': {
    transform: 'translateZ(0)',
    'will-change': 'transform',
  },
  /**
   * Subpixel antialiasing
   */
  '.subpixel-antialiased': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  /**
   * Scrollbar utilities
   */
  '.scrollbar-hide': {
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  /**
   * Selection utilities
   */
  '.select-none': {
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  '.select-text': {
    '-webkit-user-select': 'text',
    '-moz-user-select': 'text',
    '-ms-user-select': 'text',
    'user-select': 'text',
  },
  /**
   * Pointer events
   */
  '.pointer-events-auto': {
    'pointer-events': 'auto',
  },
  '.pointer-events-none': {
    'pointer-events': 'none',
  },
  /**
   * Visibility utilities
   */
  '.invisible': {
    visibility: 'hidden',
  },
  '.visible': {
    visibility: 'visible',
  },
  /**
   * Overflow utilities
   */
  '.overflow-inherit': {
    overflow: 'inherit',
  },
  /**
   * Color utilities
   */
  '.color-inherit': {
    color: 'inherit',
  },
  /**
   * Backface visibility (for animations)
   */
  '.backface-hidden': {
    'backface-visibility': 'hidden',
    '-webkit-backface-visibility': 'hidden',
  },
}
