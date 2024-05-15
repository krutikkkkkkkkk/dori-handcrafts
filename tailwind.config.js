/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#724634',
        accent: '#F7EBE7'
      },
      fontFamily: {
        //Anton
        'count': ['"Anton"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
