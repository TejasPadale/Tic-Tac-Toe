/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        '45': '45deg',
      }
    }
  },
  plugins: [],
}

