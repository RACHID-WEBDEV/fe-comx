module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-section': 'linear-gradient(90deg, rgba(245, 246, 248, 1) 50%, rgba(1, 179, 248, 0.1) 50%)',
        'about-background':
          'linear-gradient(to bottom, rgba(245, 246, 248,1) 35%,rgba(30,87,153,1) 35%,rgba(30,87,153,1) 35%,rgba(255,255,255,1) 35%);'
      },
      colors: {
        primary: { 100: '#E5E5E5', 200: '#E8ECEF', 300: '#98A9BC' },
        'secondary-100': '#D71E0E',
        'green-100': '#52965E',
        white: '#FFFFFF',
        gray: { 100: '#F8FAFB', 200: '#F4F4F6', 300: '#D6D6D6' },
        black: {
          100: '#252631',
          200: '#1B1E24',
          300: '#1E1E1E',
          400: '#140706',
          500: '#262626',
          600: '#000000',
          700: '#778CA2'
        },
        red: { 100: '#FEF2F2', 200: '#EF4444', 300: '#D71E0E' }
      }
    }
  },
  plugins: []
};
