/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#706233',
        bgSecondary: '#B0926A',
        tertiary: '#E1C78F',
        fontPrimary: '#FAE7C9',
      },
    },
  },
  plugins: [],
};
