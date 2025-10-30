/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00FFF5",
        dark: "#0A0A0A",
      },
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
}
