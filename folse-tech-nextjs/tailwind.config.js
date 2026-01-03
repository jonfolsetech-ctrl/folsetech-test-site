module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      colors: {
        yellow: {
          50: '#fffbec',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    } 
  },
  plugins: [],
  safelist: [],
  corePlugins: {
    preflight: true,
  },
  minify: true,
};