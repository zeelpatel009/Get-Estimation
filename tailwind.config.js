/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      padding: {
        22: "1.375rem",
        26: "26px",
        37: "2.313rem",
        68: "4.25rem",
        100: "6.25rem",
      },
      colors: {
        yellow: " #F7EC14",
        grayscale: "#646568",
        grayscale1: " #EEEEF2",
        grayscale2: "#B1B1B6",
      },
      fontSize: {
        26: "1.625rem",
        44: "2.75rem",
      },
      width: {
        198: "12.188rem",
        64: "4rem",
      },
      maxWidth: {
        420: "26.25rem",
        382: "23.875rem",
      },
      minWidth: {
        382: "23.875rem",
      },
      height: {
        74: "4.625rem",
        64: "4rem",
      },
      gap: {
        130: "8.125rem",
      },
      fontSize: {
        28: "1.75rem",
        22: "1.375rem",
        45: "2.813rem",
      },
    },
    screens: {
      xs: "400px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1600px",
    },
  },
  plugins: [],
};
