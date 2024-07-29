/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.transform-origin-center': {
          'transform-origin': 'center',
        },
        '.transform-origin-top': {
          'transform-origin': 'top',
        },
        '.transform-origin-bottom': {
          'transform-origin': 'bottom',
        },
        // Add more classes for other positions as needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],}