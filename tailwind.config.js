/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        50: '50',
        40: '40',
        30: '30',
        20: '20',
        10: '10',
        9: '9',
        1: '1',
      },
    },
  },
  plugins: [],
}