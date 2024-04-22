const withMT = require("@material-tailwind/html/utils/withMT");
/** @type {import('tailwindcss').Config} */

module.exports = withMT({
  content: ["*.html", "./*/*.html"],
  theme: {
    screens: {
      small: "0px",
      mobile: "375px",
      mobileOldHorSmall: "419px",
      mobileHorSmall: "567px",
      mobileHor: "640px",
      tablet: "767px",
      bigHor: "811px",
      vertIpadMini: "820px",
      bigPhoneHor: "844px",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      fontFamily: {
        barlow: "Barlow, sans-serif",
        barlowCon: "Barlow Condensed, sans-serif",
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        offWhite: "#f2f2f2",
        offBlack: "#181818",
        verdeEmp: "#A2ADA2",
        verdeEmpClaro: "#DFE2DF",
        verdeEmpMid: "#7D8C7D",
        verdeEmpDark: "#566156",
      },
    },
  },
  plugins: [],
});
