/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
        ubuntu: ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        bungee: ['"Bungee"', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'bungee-bold': '500',
      },
    },
  },
  plugins: [],
}
