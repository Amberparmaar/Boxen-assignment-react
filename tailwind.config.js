/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1f8a87", dark: "#176e6c", light: "#d9e6e5" },
        ink: { DEFAULT: "#04191b", soft: "#0a2a2d" },
        mist: "#e8eeee",
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"] },
      letterSpacing: { tightest: "-0.04em" },
    },
  },
  plugins: [],
};
