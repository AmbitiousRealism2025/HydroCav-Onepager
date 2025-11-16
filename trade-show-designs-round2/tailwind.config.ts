/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'hydro-blue': '#0066cc',
        'hydro-cyan': '#00ccff',
        'hydro-green': '#00cc66',
        'hydro-dark': '#1a1a1a',
        'print-black': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        'page': '8.5in',
        'page-height': '11in',
      },
    },
  },
  plugins: [],
}
