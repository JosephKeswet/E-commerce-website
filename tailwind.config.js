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
        Ko: ["Koulen", "cursive"],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
    }
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}
