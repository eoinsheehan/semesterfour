/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0B1120',
        'midnight-100': '#1E293B'
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
      spacing: {
        '128': '100rem',
      }
    },
  },
  plugins: [],
}
