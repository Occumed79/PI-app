/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        6: '0.06',
        8: '0.08',
        12: '0.12',
        15: '0.15',
        18: '0.18',
      },
    },
  },
  plugins: [],
};
