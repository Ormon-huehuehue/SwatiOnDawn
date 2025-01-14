/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tradeTheme/**/*.liquid"],
  theme: {
    extend: {
      colors:{
        limeCircles : "#cdf986",
        oliveGreen : "#182018",
        lightGreen : "#f0fbcc",
        beigish : "#fffff6",
        grayText : "#8f8f8f"
      }
    },
  },
  plugins: [],
}

