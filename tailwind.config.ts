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
        bounceInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '60%': {
            transform: 'translateX(-10%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        bounceInRight: 'bounceInRight 1.5s ease-out',
      },
    },
  },

  
  plugins: [],
};
export default config;

