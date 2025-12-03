import { flexiui } from '@flexi-ui/theme'
import { generateConfigFromColor } from '@flexi-ui/theme'
import type { FlexiUIPluginConfig } from '@flexi-ui/theme'

/**
 * FlexiUI Theme Configuration for Documentation
 *
 * Theme colors extracted from logo:
 * - Primary: #761AE8 (Purple from logo)
 * - Secondary: Complementary color for variety
 *
 * This creates a modern, professional theme that matches the FlexiUI brand.
 */

// Generate theme from logo color (#761AE8)
const themeConfig = generateConfigFromColor('#761AE8', {
  defaultTheme: 'light' as const,
  generateSemantic: true,
  additionalColors: {
    // Add a complementary secondary color (cyan/blue)
    secondary: '#06B6D4', // Cyan that complements purple
  },
})

// Customize the generated theme for documentation
const customTheme: FlexiUIPluginConfig = {
  ...themeConfig,
  themes: {
    light: {
      ...themeConfig.themes.light,
      colors: {
        ...themeConfig.themes.light.colors,
        // Override primary to match logo exactly
        primary: {
          DEFAULT: '#761AE8',
          50: '#F5F0FF',
          100: '#EBE0FF',
          200: '#D7C1FF',
          300: '#C3A2FF',
          400: '#AF83FF',
          500: '#761AE8', // Logo color
          600: '#5E15BA',
          700: '#46108C',
          800: '#2F0B5E',
          900: '#170630',
          foreground: '#FFFFFF',
        },
        // Custom secondary (cyan)
        secondary: {
          DEFAULT: '#06B6D4',
          50: '#E6F7FA',
          100: '#CCEFF5',
          200: '#99DFEB',
          300: '#66CFE1',
          400: '#33BFD7',
          500: '#06B6D4',
          600: '#0592AA',
          700: '#046D80',
          800: '#024955',
          900: '#01242B',
          foreground: '#FFFFFF',
        },
        // Optimized background colors for documentation (gray shades)
        background: '#FAFAFA', // Light gray instead of pure white
        foreground: '#11181C',
        default: {
          DEFAULT: '#E4E4E7',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          foreground: '#11181C',
        },
        // Content layers for documentation (gray shades)
        content1: '#FFFFFF',
        content2: '#F5F5F5',
        content3: '#F0F0F0',
        content4: '#E5E5E5',
      },
      layout: {
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '1rem',
        },
      },
    },
    dark: {
      ...themeConfig.themes.dark,
      colors: {
        ...themeConfig.themes.dark.colors,
        // Override primary for dark mode
        primary: {
          DEFAULT: '#9D5CFF', // Lighter purple for dark mode
          50: '#170630',
          100: '#2F0B5E',
          200: '#46108C',
          300: '#5E15BA',
          400: '#761AE8',
          500: '#9D5CFF', // Lighter for dark mode
          600: '#B37EFF',
          700: '#C9A0FF',
          800: '#DFC2FF',
          900: '#F5E4FF',
          foreground: '#FFFFFF',
        },
        // Custom secondary for dark mode
        secondary: {
          DEFAULT: '#22D3EE',
          50: '#01242B',
          100: '#024955',
          200: '#046D80',
          300: '#0592AA',
          400: '#06B6D4',
          500: '#22D3EE', // Lighter cyan for dark mode
          600: '#4DD9F2',
          700: '#78DFF6',
          800: '#A3E5FA',
          900: '#CEEBFD',
          foreground: '#000000',
        },
        // Optimized dark background colors (gray shades)
        background: '#0F0F0F', // Dark gray instead of pure black
        foreground: '#ECEDEE',
        default: {
          DEFAULT: '#3F3F46',
          50: '#18181B',
          100: '#27272A',
          200: '#3F3F46',
          300: '#52525B',
          400: '#71717A',
          500: '#A1A1AA',
          600: '#D4D4D8',
          700: '#E4E4E7',
          800: '#F4F4F5',
          900: '#FAFAFA',
          foreground: '#ECEDEE',
        },
        // Content layers for dark mode (gray shades)
        content1: '#1A1A1A',
        content2: '#242424',
        content3: '#2D2D2D',
        content4: '#3A3A3A',
      },
      layout: {
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '1rem',
        },
      },
    },
  },
  defaultTheme: 'light' as const,
  prefix: 'flexi-ui',
}

export default flexiui(customTheme)
