/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#570DF8",
      secondary: "#F000B8",
      accent: "#37CDBE",
      neutral: "#3D4451",
      base: "#FFFFFF",
      info: "#3ABFF8",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
    },
    animation: {
      flicker: "flicker 3s linear infinite",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
