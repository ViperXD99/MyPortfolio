/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'larger-desktop': '1440px',
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fluid-1': 'clamp(1.50rem, calc(0.63rem + 4.35vw), 4.00rem)',
        'fluid-2': 'clamp(1.13rem, calc(0.13rem + 5.00vw), 4.00rem)',
        '18px-32px': 'clamp(1.13rem, calc(1.02rem + 0.54vw), 1.50rem)',
      },
      padding: {
       // 'clamp-padding': 'clamp(1.13rem, calc(-3.70rem + 24.11vw), 18.00rem)',
        'clamp-padding': 'clamp(1.25rem, calc(-4.16rem + 18.23vw), 25.00rem);',

      },
      margin:{
        'navbar-item-margin': 'clamp(0.63rem, calc(-0.95rem + 3.27vw), 2.00rem)',
        'line-margin': 'clamp(1.25rem, calc(0.97rem + 0.96vw), 2.50rem)',
      },
      width:{

      },
      height:{

      },
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