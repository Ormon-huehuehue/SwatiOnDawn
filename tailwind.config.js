/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dawnTheme/**/*.liquid"],
  theme: {
    extend: {
      colors:{
        limeCircles : "#cdf986",
        oliveGreen : "#182018",
        lightGreen : "#f0fbcc",
        beigish : "#fffff6",
        grayText : "#8f8f8f",
        oceanBlue : "#cbe9e7",
        textPurple : "#3f378b"
      }
    },
  },
  plugins: [],
}

