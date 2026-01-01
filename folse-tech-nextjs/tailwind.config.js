module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
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