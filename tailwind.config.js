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
        md: "768px", // iPad portrait
        lg: "1024px", // iPad landscape / laptop
        xl: "1280px", // desktop
        "2xl": "1536px",
      },
      colors: {
        brand: {
          black: "#111111",
          ink: "#111111",
          accent: "#1F6B4A",
          "accent-soft": "#E8F2EC",
          gray: "#6B6B6B",
          line: "#E5E5E5",
          soft: "#F7F7F5",
          white: "#ffffff",
          // legacy aliases so old class names don't break
          navy: "#111111",
          "navy-deep": "#0A0A0A",
          copper: "#1F6B4A",
          "copper-light": "#2D8A60",
          cream: "#F7F7F5",
          charcoal: "#111111",
        },
        neutral: {
          DEFAULT: "#6B6B6B",
          black: "#111111",
          white: "#ffffff",
          lightest: "#F7F7F5",
          lighter: "#E5E5E5",
          light: "#C4C4C4",
          dark: "#444444",
          darker: "#222222",
          darkest: "#111111",
        },
        background: {
          DEFAULT: "#ffffff",
          primary: "#ffffff",
          secondary: "#F7F7F5",
          tertiary: "#6B6B6B",
          alternative: "#111111",
          success: "#E8F2EC",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#111111",
          primary: "#111111",
          secondary: "#C4C4C4",
          tertiary: "#444444",
          alternative: "#ffffff",
          success: "#1F6B4A",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#111111",
          primary: "#111111",
          secondary: "#6B6B6B",
          alternative: "#ffffff",
          success: "#1F6B4A",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#111111",
          primary: "#111111",
          secondary: "#6B6B6B",
          alternative: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
};
