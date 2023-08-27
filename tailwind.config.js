/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fluid-1': 'clamp(1.50rem, calc(0.63rem + 4.35vw), 4.00rem)',
        'fluid-2': 'clamp(1.13rem, calc(0.13rem + 5.00vw), 4.00rem)',
        '18px-32px': 'clamp(1.13rem, calc(1.02rem + 0.54vw), 1.50rem)',
        '14px-18px': 'clamp(0.88rem, calc(1.21rem + -0.43vw), 1.13rem)',
        '18px-48px': 'clamp(1.13rem, calc(0.86rem + 1.34vw), 3.00rem)',
      },
      padding: {
       // 'clamp-padding': 'clamp(1.13rem, calc(-3.70rem + 24.11vw), 18.00rem)',
        'clamp-padding': 'clamp(1.25rem, calc(-9.92rem + 17.45vw), 18.00rem)',

      },
      margin:{
        'navbar-item-margin': 'clamp(0.63rem, calc(0.54rem + 0.45vw), 1.25rem)',
        'line-margin': 'clamp(1.25rem, calc(0.97rem + 0.96vw), 2.50rem)',
      },
      width:{
        'pro-pic-width': 'clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem)',
        'text-box': 'clamp(16.25rem, calc(11.71rem + 22.68vw), 48.00rem)',
        'card-width': 'clamp(16.25rem, calc(15.89rem + 1.79vw), 18.75rem)',
        'grid-width': 'clamp(16.25rem, calc(1.43rem + 74.11vw), 120.00rem)',
      },
      height:{
        'pro-pic-height': 'clamp(20.00rem, calc(16.52rem + 17.39vw), 30.00rem)',
      },
      gap:{
        'line-gap': 'clamp(1.25rem, calc(0.97rem + 0.96vw), 2.50rem)',
      },
      //animation for the type writer text
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}