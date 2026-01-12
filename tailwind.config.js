/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          DEFAULT: 'linear-gradient(to right, #fb923c, #f59e0b, #eab308)'
        }
      },
      backgroundImage: {
        'gradient-coffee': 'linear-gradient(to right, #fb923c, #f59e0b, #eab308)'
      },
      backdropBlur: {
        'custom': '20px'
      }
    }
  },
  plugins: []
}