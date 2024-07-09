/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, htm}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}