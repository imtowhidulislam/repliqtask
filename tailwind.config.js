/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        "footerLayout" : "repeat(auto-fit, minmax(14rem, 1fr))",
        "productLayout" : "repeat(auto-fit, minmax(15rem, 1fr))",
        "collectionLayout" : "repeat(auto-fit, minmax(12rem, 1fr))",
        "homepageLayoutHero" : "repeat(auto-fit, minmax(22rem, 1fr))",
        "homepageLayoutHero1" : "repeat(auto-fit, minmax(18rem, 1fr))"
      },
      fontSize: {
        extraSmall : "8px",
      },
      animation: {
        bounce : "bounce 2s ease-in-out infinite forwards",
      },
      keyframes: {
        bounce : {
          '0%' : {transform : 'translateY(-5px)',color: "red"},
          '25%' : {transform : 'rotate(0deg)', color: "blue"},
          '50%' : {transform : 'translateY(5px)',color: "purple"},
          '75%' : {transform : 'rotate(15deg)',color: "#34ff34"},
          '100%' : {transform : 'translateY(0px)',color: "lime"},
        }
      }
    },
  },
  plugins: [],
}
