/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
