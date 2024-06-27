/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        sun: {
          50: "#FFFCF7",
          100: "#FFFAEE",
          200: "#FFF1D5",
          300: "#FFE9BC",
          400: "#FFD989",
          500: "#FFC857",
          600: "#E6B44E",
          700: "#997834",
          800: "#735A27",
          900: "#4D3C1A",
        },
      }
    },
  },
  plugins: [],
}