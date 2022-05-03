module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      //static
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      orange: 'orange',
      //dark theme
      'dark-theme-main-bg': 'rgb(36, 40, 47)',
      'dark-theme-secondary-bg': 'rgb(60, 62, 68)',
      'dark-theme-main-text': 'rgb(245, 245, 245)',
      'dark-theme-secondary-text': 'rgb(158, 158, 158)',
      //light theme
      'light-theme-main-bg': 'rgb(245, 245, 245)',
      'light-theme-secondary-bg': '#ffffff',
      'light-theme-main-text': 'rgb(36, 40, 47)',
      'light-theme-secondary-text': 'rgb(60, 62, 68)',
    },
  },
  plugins: [],
};
