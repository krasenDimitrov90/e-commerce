/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          '200': '#4dac1d',
          '300': '#49ad00',
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
          200: '#F3F3F3',
          300: '#F5F5F5',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#727272',
          700: '#464a4c',
        },
        orange: {
          300: '#F7C360',
        },
        red: {
          400: '#c64e4e',
          500: '#e85b40',
          600: '#E95028',
        }
      },
      fontSize: {
        xs: ['8px', '8px'],
        sm: ['10px', '10px'],
        base: ['12px', '12px'],
        lg: ['14px', '14px'],
        xl: ['16px', '16px'],
      },
      height: {
        '12': '46px',
      },
      width: {
        '12': '46px'
      },
      transitionDelay: {
        '50': '50ms',
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
      fontFamily: {
        'poppins-100': ['Poppins'],
      },
      lineHeight: {
        '3': '14px',
      },
    },
  },
  plugins: [],
}