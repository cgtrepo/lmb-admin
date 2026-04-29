import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
      },
    },
  },
} satisfies Config;
