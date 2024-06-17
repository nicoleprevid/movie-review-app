/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-transparent-90': 'rgba(255, 255, 255, 0.5)',
      }
    }
  },
  plugins: [],
}

