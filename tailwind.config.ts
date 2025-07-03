/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all src files for Tailwind classes
  ],
  darkMode: 'class', // Use class-based dark mode with next-themes
  theme: {
    extend: {
      colors: {
        background: '#0F172A', // Dark slate
        foreground: '#CBD5E1', // Light slate
        'foreground-strong': '#F8FAFC', // Off-white
        'muted-foreground': '#94A3B8', // Subtle text
        'primary-gradient-from': '#2DD4BF', // Bright teal
        'primary-gradient-to': '#A3E635', // Lime green
        card: '#1E293B', // Slate-800 for cards
        'card-foreground': '#F8FAFC',
        border: '#334155', // Subtle border
        // Additional colors for extensibility
        secondary: '#64748B', // Slate-400
        'secondary-foreground': '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'], // Fallback to Inter
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'], // Fallback
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'], // Fallback
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        navbar: '0 2px 10px rgba(0, 0, 0, 0.1)', // Custom shadow for navbar
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Enhanced typography for readability
    require('@tailwindcss/container-queries'), // Support for container queries
  ],
};

export default config;
