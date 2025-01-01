/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#7f29bc",
          dark: "#7f18bb",
        },
        secondary: {
          light: "#f3e8ff",
          dark: "#6B21A8",
        },
      },
    },
  },
  plugins: [],
};
