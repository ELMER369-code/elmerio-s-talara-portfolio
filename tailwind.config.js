/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0a192f',
        },
        silver: '#ccd6f6',
        cyan: {
          electric: '#64ffda',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', '"Courier Prime"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
