module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      PURPLE: '#8149FF',
      BLUE: '#9Da8FF',
      DARKPINK: '#FF0071',
      YELLOW: '#FFB703',
      PEACH: '#FFCDD9',
      GREEN: '71F5C4',
      WHITE: '#FEFEFE',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      // sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
