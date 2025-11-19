/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        elms: ["'Elms Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
