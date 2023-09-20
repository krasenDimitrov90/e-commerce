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
          400: '#E0E0E0',
          500: '#BDBDBD',
        },
        orange: {
          300: '#F7C360',
        },
        red: {
          600: '#E95028',
        }
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
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
    fontFamily: {
      'poppins-100': ['Poppins'],
    },
    lineHeight: {
      '3': '14px',
    }
  },
  plugins: [],
}