/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        screens:{
          lg:"1200px",
          md:"768px",
          sm:"640px"
        }
        
      },
      colors:{
        'blackk':"#19191C",
        'price':'#EA3838',
        'joy':'#888888',
        'header':"#F6F6F6"
      },
      fontFamily:{
        'roboto':"Roboto",
      }
    },
  },
  plugins: [],
}