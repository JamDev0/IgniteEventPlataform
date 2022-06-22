/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'green': {
            '400': '#00B37E',
            '500': '#00875F',
            '600': '#015F43'
          },

          'blue': {
            '300': '#81D8F7',
          },

          'orange': {
            '300': '#FBA94C',
          },

          'red': {
            '300': '#F75A68',
          }
        },

        'base': {
          'background': '#09090A',
          'element': '#121214',
          'bars': '#121214',
          'divisor': '#323238',
          'text': {
            'title': '#E1E1E6',
            'body': '#C4C4CC',
            'secondaryBody': '#8D8D99',
          }
        }
      },

      fontFamily: {
        'roboto': 'Roboto',
      }
    },
  },
  plugins: [],
}
