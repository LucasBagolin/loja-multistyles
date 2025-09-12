/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        bp2: '481px',
        bp3: '769px',
        bp4: '1025px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.1)',
        cardDark: '0 1px 2px rgba(0,0,0,.6), 0 1px 3px rgba(0,0,0,.65)',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
