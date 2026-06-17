import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#F59E0B",
        cream: "#FAFAF9",
        brand: {
          red: "#DC2626",
          blue: "#1D4ED8",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        pragati: ["Pragati Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;