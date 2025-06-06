// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        secondary: "#3498DB",
        accent: "#E67E22",
        background: "#F4F6F6",
        card: "#FFFFFF",
        text: "#2C3E50",
        success: "#27AE60",
        error: "#E74C3C",
        warning: "#F39C12",
      },
      borderRadius: {
        custom: "12px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
