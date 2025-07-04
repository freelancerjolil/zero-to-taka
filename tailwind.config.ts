import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',

  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Correctly configured content path
  ],

  theme: {
    extend: {
      // 1. COLORS: This correctly maps your CSS color variables.
      colors: {
        border: 'hsl(var(--color-border))',
        background: 'hsl(var(--color-background))',
        foreground: {
          DEFAULT: 'hsl(var(--color-foreground))',
          strong: 'hsl(var(--color-foreground-strong))',
        },
        primary: {
          'gradient-from': 'hsl(var(--color-primary-gradient-from))',
          'gradient-to': 'hsl(var(--color-primary-gradient-to))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--color-card))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
        muted: {
          foreground: 'hsl(var(--color-muted-foreground))',
        },
      },

      // 2. FONTS: This correctly maps your CSS font variables.
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },

      // 3. SPACING: These static values are the robust, correct approach.
      spacing: {
        '17': '4.25rem', // 68px
        '29': '7.25rem', // 116px
      },

      // 4. BREAKPOINTS: This correctly maps your custom breakpoint variable.
      screens: {
        '3xl': 'var(--breakpoint-3xl)',
      },

      // 5. BOX SHADOW: Your custom shadow is correctly added.
      boxShadow: {
        navbar: '0 2px 10px rgba(0, 0, 0, 0.1)',
      },

      // 6. EASING: **Added this back from your CSS.**
      // This makes `ease-fluid` and `ease-snappy` utilities available.
      transitionTimingFunction: {
        fluid: 'var(--ease-fluid)',
        snappy: 'var(--ease-snappy)',
      },
    },
  },

  // 7. PLUGINS: Your selected plugins are excellent.
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
};

export default config;
