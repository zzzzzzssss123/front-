/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        secondary: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa2ca',
          400: '#fe68a7',
          500: '#f83b86',
          600: '#e91c68',
          700: '#ca0f4f',
          800: '#a71142',
          900: '#8b133a',
          950: '#55041f',
        },
      },
    },
  },
  plugins: [],
}
