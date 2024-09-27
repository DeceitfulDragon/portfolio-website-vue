module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'large': '1rem',
      },
      spacing: {
        'skill': '80ch',
      },
      colors: {
        'green-primary': '#00ae26',
        'background-color': '#151515',
        'skill-bg': '#343a40',
        'card-bg': '#111111',
      },
      fontFamily: {
        primary: ['"Exo 2"', 'sans-serif'],
        secondary: ['Rubik Mono One', 'monospace'],
        heading: ['Source Code Pro', 'monospace'],
      },
      backgroundImage: {
        'portfolio-contact': "url('@/assets/images/portfolio_bg_contact.webp')",
        'portfolio-home': "url('@/assets/images/portfolio_bg_home.webp')",
        'portfolio-about': "url('@/assets/images/portfolio_bg_about.webp')",
      },
    },
  },
};