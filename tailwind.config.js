/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '300': '#4dac1d',
          '400': '#308605',
        },
        blue: {
          '500': '#175EA8',
          '800': '#124B86',
        },
        dark: {
          '800': '#292B2C',
        },
        gray: {
          400: '#E0E0E0'
        }
      },
      fontSize: {
        'xs': '10px'
      },
      height: {
        '12': '46px',
      },
      width: {
        '12': '46px'
      },
      transitionDelay: {
        '50': '50ms',
      }
    },
  },
  plugins: [],
}