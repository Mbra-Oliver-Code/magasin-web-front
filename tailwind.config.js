/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: {
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E", // This is your main red color
          600: "#C53030",
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
        },
      },
      fontFamily: {
        inter: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        rajdhani: ["var(--font-rajdhani)"],
        "open-sans": ["var(--font-open-sans)"],
        helveticNeue: ["var(--font-helvetica-neue)"],
      },
    },
  },
  plugins: [],
};
