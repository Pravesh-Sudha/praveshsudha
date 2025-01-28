import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--gray-100))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--gray-100))',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(var(--gray-900))',
        primary: {
          DEFAULT: 'hsl(150, 60%, 40%)', // Main green
          foreground: 'hsl(150, 20%, 95%)', // Text over green
          25: 'hsl(150, 50%, 97%)', // Very light green
          50: 'hsl(150, 45%, 90%)',
          100: 'hsl(150, 40%, 80%)',
          200: 'hsl(150, 35%, 70%)',
          300: 'hsl(150, 30%, 60%)',
          400: 'hsl(150, 25%, 50%)',
          500: 'hsl(150, 60%, 40%)', // Same as DEFAULT
          600: 'hsl(150, 50%, 35%)',
          700: 'hsl(150, 40%, 30%)',
          800: 'hsl(150, 30%, 20%)',
          900: 'hsl(150, 20%, 15%)', // Dark green
        },
        gray: {
          25: 'hsl(var(--gray-25))',
          50: 'hsl(var(--gray-50))',
          100: 'hsl(var(--gray-100))',
          200: 'hsl(var(--gray-200))',
          300: 'hsl(var(--gray-300))',
          400: 'hsl(var(--gray-400))',
          500: 'hsl(var(--gray-500))',
          600: 'hsl(var(--gray-600))',
          700: 'hsl(var(--gray-700))',
          800: 'hsl(var(--gray-800))',
          900: 'hsl(var(--gray-900))',
        },
        secondary: {
          DEFAULT: 'hsl(220, 15%, 60%)', // Neutral blue for secondary
          foreground: 'hsl(220, 10%, 95%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 65%, 50%)', // Red for destructive actions
          foreground: 'hsl(0, 100%, 95%)',
        },
        muted: {
          DEFAULT: 'hsl(210, 20%, 90%)', // Light muted gray
          foreground: 'hsl(210, 10%, 20%)',
        },
        accent: {
          DEFAULT: 'hsl(160, 40%, 45%)', // Complementary green
          foreground: 'hsl(160, 20%, 95%)',
        },
        popover: {
          DEFAULT: 'hsl(210, 10%, 98%)',
          foreground: 'hsl(210, 10%, 20%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)', // White for card backgrounds
          foreground: 'hsl(210, 10%, 20%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
