import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#adc6ff",
        secondary: "#a4c9ff",

        surface: "#101415",

        "surface-container": "#1d2022",
        "surface-container-low": "#191c1e",
        "surface-container-high": "#272a2c",

        "on-primary": "#002e6a",

        "on-surface": "#e0e3e5",
        "on-surface-variant": "#c2c6d6",

        "outline-variant": "#424754",

        tertiary: "#bec6e0",
      },

      spacing: {
        "container-max": "1280px",
        gutter: "24px",
        base: "4px",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },

  plugins: [],
};

export default config;