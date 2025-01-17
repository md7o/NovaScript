/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurble: "#6764FF",
        FirstBG: "#101114",
        SecondBG: "#0B0B0B",
      },
      borderRadius: {
        roundedButt: "20px",
        defaultRounded: "40px",
      },
      width: {
        mediumW: "300px",
        biggW: "500px",
        hugeW: "600px",
        superW: "800px",
      },
      height: {
        line: "1px",
        smallH: "400px",
        smallHplus: "500px",
        mediumH: "600px",
        height700: "700px",
        biggH: "800px",
        xLarge: "900px",
        resizeBG: "1000px",
        hugeH: "1300px",
      },
      margin: {
        between: "650px",
        between2: "450px",
        between3: "150px",
        between4: "350px",
      },
      screens: {
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "2.5xl": "1800px",
        // => @media (min-width: 1800px) { ... }
        "3xl": "2500px",
        // => @media (min-width: 1700px) { ... }
      },
      maxWidth: {
        lgMw: "700px",
      },
    },
  },
  plugins: [],
};
