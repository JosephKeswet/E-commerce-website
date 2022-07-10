/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary:'#164C25',
      MyWhite: '#ffffff'
    },
    extend: {},
    fontFamily: {
      Ko: ["Koulen", "cursive"]
    }
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}
