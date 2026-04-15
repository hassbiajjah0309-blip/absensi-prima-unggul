import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CC0000",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

