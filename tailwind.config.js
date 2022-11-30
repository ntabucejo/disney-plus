/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      notebook: "480px",
      tablet: "640px",
      tala: "860px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      opacity: {
        fade: 0.6,
      },
      fontSize: {
        ms: "10px",
      },
      colors: {
        background: {
          dark: "#101115",
        },
        typography: {
          light: "#D3D3D4",
        },
        card: {
          dark: "#1C1F2A",
        },
        action: {
          brand: "#062794",
          dark: "#222326",
        },
        rated: {
          dark: "#3F4043",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
