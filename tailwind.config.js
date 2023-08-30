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
        offblack: '#181818',
        gris: '#BABABA',
        grisClaro: '#DEE0E2',
        verde: '#A2ADA2',
        verdeFuerte: '#3A413A',
        verdeVivo: '#98987B',
        verdeMate: '#A8A891',
        oro: '#DDC9AA',
      }
    },
  },
  plugins: [],
}

