/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4263eb',
        'secondary': '#63e6be'
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      },
      // darkmode:"selector",
  plugins: [],
}
}
}