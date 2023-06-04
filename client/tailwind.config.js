module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      /* 4, 5 */
      'in': ['Inconsolata', 'sans-serif'],

      /* 3, 4, 5 */
      'po': ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500
    }
  },
  plugins: [],
}
