/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      margin: {
        '48': '12rem'
      },
      colors: {
        'counter-green': '#2fd38f'
      }
    },
  },
  plugins: [],
}

