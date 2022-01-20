module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#90DDFF',
      black: {
        100: '#4E4E4E',
        500: '#000',
      },
      white: '#fff',
    },
    screens: {
      'xs' : '640px',
      's' : '768px',
      'md' : '1024px',
      'lg' : '1280px',
      'xl' : '1600px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
