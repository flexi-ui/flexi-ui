/**
 * Enhanced animation utilities
 * Based on HeroUI v3 animation system improvements
 */
export default {
  /**
   * Spinner animations
   */
  '.spinner-bar-animation': {
    'animation-delay': 'calc(-1.2s + (0.1s * var(--bar-index)))',
    transform: 'rotate(calc(30deg * var(--bar-index)))translate(140%)',
  },
  '.spinner-dot-animation': {
    'animation-delay': 'calc(250ms * var(--dot-index))',
  },
  '.spinner-dot-blink-animation': {
    'animation-delay': 'calc(200ms * var(--dot-index))',
  },
  /**
   * Fade animations
   */
  '.animate-fade-in': {
    animation: 'fade-in 200ms ease-out',
  },
  '.animate-fade-out': {
    animation: 'fade-out 150ms ease-in',
  },
  /**
   * Scale animations
   */
  '.animate-scale-in': {
    animation: 'scale-in 200ms ease-out',
  },
  '.animate-scale-out': {
    animation: 'scale-out 150ms ease-in',
  },
  /**
   * Slide animations
   */
  '.animate-slide-in-up': {
    animation: 'slide-in-up 200ms ease-out',
  },
  '.animate-slide-in-down': {
    animation: 'slide-in-down 200ms ease-out',
  },
  '.animate-slide-in-left': {
    animation: 'slide-in-left 200ms ease-out',
  },
  '.animate-slide-in-right': {
    animation: 'slide-in-right 200ms ease-out',
  },
  /**
   * Pulse animation
   */
  '.animate-pulse-slow': {
    animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  /**
   * Bounce animation
   */
  '.animate-bounce-slow': {
    animation: 'bounce 2s infinite',
  },
}
