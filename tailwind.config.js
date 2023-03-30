/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    animation: {
      flicker: "flicker 3s linear infinite",
    },
  },
};
