/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/HomePage.jsx",
    "./src/Components/NavBar.jsx",
    "./src/Components/PlayVideo.jsx",
    "./src/Components/VideoCard.jsx",
    "./src/Components/Login.jsx",
    "./src/Components/Register.jsx",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}


