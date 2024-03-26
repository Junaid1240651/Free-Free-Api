/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgCard: "#363636",
        btnBorder: "#26b95a",
        borderColor: "#d4d6d7",
        bgJson: "#1c2834",
      },
    },
  },
  plugins: [],
};
