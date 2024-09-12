/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font-Jura':['Jura', 'sans-serif'],
        'font-Inter':['Inter', 'sans-serif'],
      },
      colors:{
        'bgColor':'#191E35',
        'primaryColor':'#332FD0',
        'secondaryColor':'#F52AF5',
        'thirdColor':'#15BFFD',
        'redColor':'#FF0000',
        'greenColor':'#00FF57',
      },
      backgroundImage:{
        'primary-gradient':'linear-gradient(93deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%)',
      },
    },
  },
  plugins: [],
}