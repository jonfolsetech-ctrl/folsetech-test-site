module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      colors: {
        brand: {
          navy: {
            900: '#081724',
            800: '#0a2030',
            DEFAULT: '#0f2740',
          },
          gold: {
            50: '#fff8e6',
            400: '#f5b21a',
            500: '#f2ad10',
            600: '#d6990f',
          },
          cyan: {
            50: '#e6f7ff',
            300: '#7dd3fc',
            400: '#2fb1ff',
            600: '#0ea5e9',
          },
        },
        amber: {
          50: '#fff8e6',
          400: '#f5b21a',
          500: '#f2ad10',
          600: '#d6990f',
        },
        blue: {
          50: '#e6f7ff',
          300: '#7dd3fc',
          400: '#2fb1ff',
          600: '#0ea5e9',
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