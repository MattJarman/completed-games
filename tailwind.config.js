/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'steam-blue': {
          DEFAULT: '#1b2838'
        }
      }
    }
  },
  plugins: []
}
