import type { Config } from "tailwindcss";

export default {
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
        primary: "#8486a9",
        secondary: "#fb6087",
        neutral: {
          100: "#ffffff",
          200: "#343650",
          300: "#1e1f29",
          400: "#191a24",
        },
      },
      fontFamily: {
        sans: ["var(--font-redHat)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
