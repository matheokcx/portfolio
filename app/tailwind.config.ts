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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slide_up: {
          '0%': { 'margin-top': '300px', 'opacity': '0' },
          '100%': { 'margin-top': '0px', 'opacity': '100%' }
        }
      },
      animation: {
        slide_up: 'slide_up 2s ease-in'
      },
      fontFamily: {
        'roboto': ['Roboto', 'bold']
      }
    },
  },
  plugins: [],
};
export default config;
