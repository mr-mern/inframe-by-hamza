/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Default Poppins
        lora: ["var(--font-lora)", "serif"],         // Optional Lora
        vibes: ["var(--font-great-vibes)", "cursive"], // Optional Great Vibes
      },
      colors: {
        blackOlive: "#172b1b",
        crocodileGreen: "#717550",
        pearlBush: "#e9e3db",
      },
    },
  },
  plugins: [],
};
