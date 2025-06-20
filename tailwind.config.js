/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1400px'
    },
    backgroundImage: {
      hero: 'url(/public/assets/dzu-1.jpg)'
    },
    extend: {},
  },
  plugins: [],
}

