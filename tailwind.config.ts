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
        brand: {
          primary: "var(--brand-primary)",
          "primary-dark": "var(--brand-primary-dark)",
          "primary-light": "var(--brand-primary-light)",
          background: "var(--brand-background)",
          text: "var(--brand-text)",
          "text-light": "var(--brand-text-light)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
          surface: "var(--brand-surface)",
          border: "var(--brand-border)",
        },
      },
      boxShadow: {
        brand: "0 4px 6px -1px var(--brand-shadow), 0 2px 4px -1px var(--brand-shadow)",
      },
    },
  },
  plugins: [],
};
export default config;

