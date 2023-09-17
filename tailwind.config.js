/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-green': '#49ad00'
      },
      fontSize: {
        'btn-small': '10px'
      },
      height: {
        'btn-small': '46px',
      }
    },
  },
  plugins: [],
}