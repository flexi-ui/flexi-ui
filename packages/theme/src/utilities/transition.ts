/**
 * Default transition duration
 */
export const DEFAULT_TRANSITION_DURATION = '250ms'

/**
 * Enhanced transition utilities with better timing functions and more options
 * Based on HeroUI v3 transition system improvements
 */
export default {
  /**
   * Background transitions
   */
  '.transition-background': {
    'transition-property': 'background, background-color',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-background-fast': {
    'transition-property': 'background, background-color',
    'transition-timing-function': 'ease-out',
    'transition-duration': '150ms',
  },
  '.transition-background-slow': {
    'transition-property': 'background, background-color',
    'transition-timing-function': 'ease-in-out',
    'transition-duration': '400ms',
  },
  /**
   * Color transitions
   */
  '.transition-colors': {
    'transition-property': 'color, background-color, border-color, text-decoration-color, fill, stroke',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-colors-opacity': {
    'transition-property':
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-colors-fast': {
    'transition-property': 'color, background-color, border-color, text-decoration-color, fill, stroke',
    'transition-timing-function': 'ease-out',
    'transition-duration': '150ms',
  },
  /**
   * Size transitions
   */
  '.transition-width': {
    'transition-property': 'width',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-height': {
    'transition-property': 'height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-size': {
    'transition-property': 'width, height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  /**
   * Position transitions
   */
  '.transition-left': {
    'transition-property': 'left',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-position': {
    'transition-property': 'top, right, bottom, left',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  /**
   * Transform transitions
   */
  '.transition-transform': {
    'transition-property': 'transform',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-opacity': {
    'transition-property': 'transform, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-background': {
    'transition-property': 'transform, background, background-color',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-colors': {
    'transition-property':
      'transform, color, background, background-color, border-color, text-decoration-color, fill, stroke',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-colors-opacity': {
    'transition-property':
      'transform, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  /**
   * Opacity transitions
   */
  '.transition-opacity': {
    'transition-property': 'opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-opacity-fast': {
    'transition-property': 'opacity',
    'transition-timing-function': 'ease-out',
    'transition-duration': '150ms',
  },
  /**
   * Shadow transitions
   */
  '.transition-shadow': {
    'transition-property': 'box-shadow',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  /**
   * All properties (use sparingly)
   */
  '.transition-all': {
    'transition-property': 'all',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  /**
   * No transition
   */
  '.transition-none': {
    'transition-property': 'none',
    'transition-duration': '0ms',
  },
}
