/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'chinese-black': '#171717'
      },
      gridTemplateColumns: {
        'custom-6': '0.5fr 2fr 1fr 1fr 1fr 1fr'
      }
    }
  },
  plugins: []
}
