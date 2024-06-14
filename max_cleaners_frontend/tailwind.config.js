/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'small': {'min': '350px'},
      'mobile': {'min': '350px', 'max': '640px'},
      'tablet': {'min': '640px', 'max': '1024px'},
      'laptop': {'min': '1024px', 'max': '1280px'},
      'desktop': '1280px',
    },
    extend: {
    },
  },
  plugins: [],
}

