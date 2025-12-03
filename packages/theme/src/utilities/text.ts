/**
 * Enhanced text utilities
 * Based on HeroUI v3 text utilities improvements
 */
export default {
  /**
   * Typography scale utilities
   */
  '.text-tiny': {
    'font-size': 'var(--flexi-ui-font-size-tiny)',
    'line-height': 'var(--flexi-ui-line-height-tiny)',
  },
  '.text-small': {
    'font-size': 'var(--flexi-ui-font-size-small)',
    'line-height': 'var(--flexi-ui-line-height-small)',
  },
  '.text-medium': {
    'font-size': 'var(--flexi-ui-font-size-medium)',
    'line-height': 'var(--flexi-ui-line-height-medium)',
  },
  '.text-large': {
    'font-size': 'var(--flexi-ui-font-size-large)',
    'line-height': 'var(--flexi-ui-line-height-large)',
  },
  /**
   * Text truncation utilities
   */
  '.truncate': {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
  },
  '.line-clamp-1': {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '1',
  },
  '.line-clamp-2': {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2',
  },
  '.line-clamp-3': {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '3',
  },
  /**
   * Text alignment utilities
   */
  '.text-start': {
    'text-align': 'start',
  },
  '.text-end': {
    'text-align': 'end',
  },
  /**
   * Text decoration utilities
   */
  '.underline-offset-2': {
    'text-underline-offset': '2px',
  },
  '.underline-offset-4': {
    'text-underline-offset': '4px',
  },
}
