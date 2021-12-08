module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      PURPLE: '#5F55B9',
      BLUE: '#006ECA',
      DARKPINK: '#B01A76',
      YELLOW: '#FFB703',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
