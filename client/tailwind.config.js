/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "103":"92vh",
        "102":"82vh",
        "11":"8vh",
        "101":"78vh"
      },
      screens : {
        "wq":"500px"
      },
      width:{
        "102":"20rem"
      },
      spacing:{
        "101":"80vh"
      }
    }
  },
  plugins: [],
}
