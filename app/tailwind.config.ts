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
          '0%': { 'margin-top': '400px', 'opacity': '0' },
          '100%': { 'margin-top': '208px', 'opacity': '100%' }
        },
        fadeIn: {
          '0%': { transform: 'translateY(80px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slide_up: 'slide_up 2s ease-in',
        fadeIn: 'fadeIn 2s ease-out forwards'
      }
    },
  },
  plugins: [],
};
export default config;
