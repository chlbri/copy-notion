module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      // screens: {
      //   '3xl': '2000px',
      // },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        'ipad-landscape': '4 / 3',
        'ipad-portrait': '3 / 4',
      },
    },
  },
  variants: {
    extend: {
      // animation: ['group-hover', 'responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
