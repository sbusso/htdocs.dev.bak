module.exports = {
  purge: ["./src/_includes/**/*.njk", "./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-blue": "#0080E5",
        "secondary-yellow": "#f9d835",
        "shade-yellow": "#FFF5DD",
        "main-dark": "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
