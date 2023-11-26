/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#020617',
        bgSecondary: '#1e293b',
        tertiary: '#475569',
        fontPrimary: '#cbd5e1',
      },
    },
  },
  plugins: [],
};
