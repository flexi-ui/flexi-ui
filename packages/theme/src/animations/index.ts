/**
 * Enhanced animations with more keyframes and better timing
 * Based on HeroUI v3 animation system improvements
 */
export const animations = {
  animation: {
    // Existing animations
    'drip-expand': 'drip-expand 420ms linear',
    'spinner-ease-spin': 'spinner-spin 0.8s ease infinite',
    'spinner-linear-spin': 'spinner-spin 0.8s linear infinite',
    sway: 'sway 750ms ease infinite',
    blink: 'blink 1.4s infinite both',
    'fade-out': 'fade-out 1.2s linear 0s infinite normal none running',
    'appearance-in': 'appearance-in 250ms ease-out normal both',
    'appearance-out': 'appearance-out 60ms ease-in normal both',
    'indeterminate-bar':
      'indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal none running',
    // Enhanced animations
    'fade-in': 'fade-in 200ms ease-out',
    'scale-in': 'scale-in 200ms ease-out',
    'scale-out': 'scale-out 150ms ease-in',
    'slide-in-up': 'slide-in-up 200ms ease-out',
    'slide-in-down': 'slide-in-down 200ms ease-out',
    'slide-in-left': 'slide-in-left 200ms ease-out',
    'slide-in-right': 'slide-in-right 200ms ease-out',
    'slide-out-up': 'slide-out-up 150ms ease-in',
    'slide-out-down': 'slide-out-down 150ms ease-in',
    'slide-out-left': 'slide-out-left 150ms ease-in',
    'slide-out-right': 'slide-out-right 150ms ease-in',
    'zoom-in': 'zoom-in 200ms ease-out',
    'zoom-out': 'zoom-out 150ms ease-in',
    'spin-slow': 'spinner-spin 2s linear infinite',
    'spin-fast': 'spinner-spin 0.5s linear infinite',
  },
  keyframes: {
    shimmer: {
      '100%': {
        transform: 'translateX(100%)',
      },
    },
    'spinner-spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    'drip-expand': {
      '0%': {
        opacity: '0.2',
        transform: 'scale(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(2)',
      },
    },
    'appearance-in': {
      '0%': {
        opacity: '0',
        transform: 'translateZ(0)  scale(0.95)',
      },
      '60%': {
        opacity: '0.75',
        /* Avoid blurriness */
        backfaceVisibility: 'hidden',
        webkitFontSmoothing: 'antialiased',
        transform: 'translateZ(0) scale(1.05)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateZ(0) scale(1)',
      },
    },
    'appearance-out': {
      '0%': {
        opacity: '1',
        transform: 'scale(1)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(0.85)',
      },
    },
    'indeterminate-bar': {
      '0%': {
        transform: 'translateX(-50%) scaleX(0.2)',
      },
      '100%': {
        transform: 'translateX(100%) scaleX(1)',
      },
    },
    sway: {
      '0%': {
        transform: 'translate(0px, 0px)',
      },
      '50%': {
        transform: 'translate(0px, -150%)',
      },
      '100%': {
        transform: 'translate(0px, 0px)',
      },
    },
    blink: {
      '0%': {
        opacity: '0.2',
      },
      '20%': {
        opacity: '1',
      },
      '100%': {
        opacity: '0.2',
      },
    },
    'fade-out': {
      '0%': {
        opacity: '1',
      },
      '100%': {
        opacity: '0.15',
      },
    },
    // Enhanced keyframes
    'fade-in': {
      '0%': {
        opacity: '0',
      },
      '100%': {
        opacity: '1',
      },
    },
    'scale-in': {
      '0%': {
        opacity: '0',
        transform: 'scale(0.95)',
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1)',
      },
    },
    'scale-out': {
      '0%': {
        opacity: '1',
        transform: 'scale(1)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(0.95)',
      },
    },
    'slide-in-up': {
      '0%': {
        opacity: '0',
        transform: 'translateY(10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
    'slide-in-down': {
      '0%': {
        opacity: '0',
        transform: 'translateY(-10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
    'slide-in-left': {
      '0%': {
        opacity: '0',
        transform: 'translateX(10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
    },
    'slide-in-right': {
      '0%': {
        opacity: '0',
        transform: 'translateX(-10px)',
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
    },
    'slide-out-up': {
      '0%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'translateY(-10px)',
      },
    },
    'slide-out-down': {
      '0%': {
        opacity: '1',
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'translateY(10px)',
      },
    },
    'slide-out-left': {
      '0%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'translateX(-10px)',
      },
    },
    'slide-out-right': {
      '0%': {
        opacity: '1',
        transform: 'translateX(0)',
      },
      '100%': {
        opacity: '0',
        transform: 'translateX(10px)',
      },
    },
    'zoom-in': {
      '0%': {
        opacity: '0',
        transform: 'scale(0.9)',
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1)',
      },
    },
    'zoom-out': {
      '0%': {
        opacity: '1',
        transform: 'scale(1)',
      },
      '100%': {
        opacity: '0',
        transform: 'scale(0.9)',
      },
    },
  },
}
