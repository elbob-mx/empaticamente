/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./*.html"],
  theme: {
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        barlow: 'Barlow Condensed, sans-serif',
        montserrat: 'Montserrat, sans-serif',
      },
      colors: {
        offwhite: '#F2F2F2',
        offblack: '#161616',
        morado1: '#5B156E',
      }
    },
  },
  plugins: [],
}

