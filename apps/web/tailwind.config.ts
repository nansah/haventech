import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#E8EDF3",
          100: "#C5D0DC",
          200: "#9FB0C3",
          300: "#7990A9",
          400: "#5C7796",
          500: "#3F5E82",
          600: "#2E4A6A",
          700: "#1E3554",
          800: "#152640",
          900: "#0F1B2D",
        },
        gold: {
          50: "#FFF9EB",
          100: "#FEF0C7",
          200: "#FDDF89",
          300: "#FCC94B",
          400: "#FBB827",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
