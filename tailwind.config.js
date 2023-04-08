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
      'primary': '#FFD700',
      'primary-dark': '#F1A056',
      'secondary': '#714E3D',
      'secondary-light': '#d7a97c',
      'gray-dark': '#333533',
      'gray': '#636363',
      'gray-light': '#CDCDCD',
      'white': '#EDEDED',
      'black': '#090909',

      'background1': '#FFC837',
      'background2' : '#FF8008'
    },
  },
  plugins: [],
}
