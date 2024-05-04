/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,html,svelte,ts,md,svx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'om-gray': '#2d2b3a',
        'om-light-gray': '#4b489d',
        'om-purple': '#4b489d'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
