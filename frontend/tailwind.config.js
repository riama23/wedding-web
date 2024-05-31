/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        gold: '#E3D09E',
        black: '#171717',
        ocher: '#EDEAE0',
        'dark-green': '#658055'
      }
    }
  },
  plugins: []
}
