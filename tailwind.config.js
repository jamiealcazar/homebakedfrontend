module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'cursive': ['Cabin Sketch', 'Cinzel Decorative', 'Comforter Brush', 'Dancing Script', 'Homemade Apple', 'Kristi', 'Over the Rainbow']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
