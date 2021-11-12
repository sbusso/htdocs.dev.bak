module.exports = {
  mode: "jit",
  purge: ["./src/_includes/**/*.njk", "./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-blue": "#0080E5",
        "secondary-yellow": "#f9d835",
        "shade-yellow": "#FFFFF3",
        "main-dark": "#333333",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
