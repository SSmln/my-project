/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "340px",
      // => @media (min-width: 640px) { ... }

      md: "940px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}



module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: ()=>({
        slideRight:{
          "0%":{opacity:0,marginLeft:"-600px"},
          "100%":{opacity:1,marginLeft:"0"}
        },
        slideLeft:{
          "0%":{opacity:0,marginLeft:"-600px"},
          "100%":{opacity:1,marginRight:"0"}
        },
        slideTop:{
          "0%":{opacity:0,marginBottom:"-600px"},
          "100%":{opacity:1,marginTop:"0"}
        },
        slideCenter:{
          "0%":{opacity:1},
          "100%":{opacity:0}
        }
      }),
      animation: {
        slideRight:"slideRight 1s ease-in",
        slideLeft:"slideLeft 2s ease-in",
        slideTop:"slideTop 1s ease-in",
        slideCenter:"slideCenter 3.4s ease-in"
      }
    },
    plugins: [],
  },
}