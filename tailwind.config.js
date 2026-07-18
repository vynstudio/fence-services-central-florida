/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      // Explicit shells: phone default → iPad (md) → desktop (lg)
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        /**
         * Fence Line logo palette (sampled from logo-dark.png)
         * Primary ink green: #124137
         */
        brand: {
          black: "#0B1A16",
          ink: "#0F241F",
          accent: "#124137",
          "accent-hover": "#0E332C",
          "accent-bright": "#1F7A52",
          "accent-soft": "#E7F0EC",
          gray: "#4A5C56",
          line: "#C9D5CF",
          soft: "#F3F7F5",
          white: "#ffffff",
          navy: "#0B1A16",
          "navy-deep": "#071310",
          copper: "#124137",
          "copper-light": "#1F7A52",
          cream: "#F3F7F5",
          charcoal: "#0F241F",
        },
        neutral: {
          DEFAULT: "#4A5C56",
          black: "#0B1A16",
          white: "#ffffff",
          lightest: "#F3F7F5",
          lighter: "#C9D5CF",
          light: "#A8B8B1",
          dark: "#3A4A45",
          darker: "#1A2E28",
          darkest: "#0B1A16",
        },
        background: {
          DEFAULT: "#ffffff",
          primary: "#ffffff",
          secondary: "#F3F7F5",
          tertiary: "#4A5C56",
          alternative: "#0B1A16",
          success: "#E7F0EC",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#C9D5CF",
          primary: "#C9D5CF",
          secondary: "#A8B8B1",
          tertiary: "#3A4A45",
          alternative: "#ffffff",
          success: "#124137",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#0F241F",
          primary: "#0F241F",
          secondary: "#4A5C56",
          alternative: "#ffffff",
          success: "#124137",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#124137",
          primary: "#124137",
          secondary: "#4A5C56",
          alternative: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-brand)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        brand: "0.14em",
        "brand-tight": "0.04em",
      },
      borderRadius: {
        brand: "2px",
      },
    },
  },
};
