/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "source-code-pro": ["Source Code Pro", "monospace"]
      },
      colors: {
        "pinkish-red": {
          "900": "#D81E5B",
          "100": "#FFCFDF",
          "200": "#FFC0CB"
        }
      }
    },
  },
  plugins: [],
}