/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryBlue: "#247CB2",
      crimsonRed: "#D62839",
      skyBlue: "#3BB1F9",
      deepMaroon: "#9E1F2B",
      lightBlue: "#D8F0FF",
      midnightBlack: "#0F0F0F",
      navyBlue: "#1A447E",
      iceBlue: "#D8F0FF",
      black75: "rgba(0, 0, 0, 0.75)",
      black50: "rgba(0, 0, 0, 0.50)",
      black25: "rgba(0, 0, 0, 0.25)",
      white90: "rgba(255,255,255,0.90)",
      white75: "rgba(255,255,255,0.75)",
      white50: "rgba(255,255,255,0.50)",
      white25: "rgba(255,255,255,0.25)",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
