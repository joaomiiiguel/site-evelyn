/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#B59661',
      'primary-light': '#E8D9C1',
      'primary-dark': '#583B2C',
      'secondary': '#242736',
      'gray-dark': '#242736',
      'gray': '#636363',
      'gray-light': '#CDCDCD',
      'white': '#F9F8F4',
      'black': '#090909',
      'green': '#86efac',
      'red': '#f87171',

      'background1': '#FFC837',
      'background2' : '#FF8008'
    },
  },
  plugins: [],
}
