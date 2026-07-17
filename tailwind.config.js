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
          ink: "#121212",
          accent: "#124137",
          "accent-hover": "#0E332C",
          "accent-bright": "#2A9B6A",
          "accent-soft": "#E8F2EE",
          gray: "#555555",
          line: "#E2E8E4",
          soft: "#F6F8F6",
          white: "#ffffff",
          navy: "#111111",
          "navy-deep": "#0A0A0A",
          copper: "#124137",
          "copper-light": "#2A9B6A",
          cream: "#F6F8F6",
          charcoal: "#111111",
        },
        neutral: {
          DEFAULT: "#555555",
          black: "#111111",
          white: "#ffffff",
          lightest: "#F6F8F6",
          lighter: "#E2E8E4",
          light: "#C4C4C4",
          dark: "#444444",
          darker: "#222222",
          darkest: "#111111",
        },
        background: {
          DEFAULT: "#ffffff",
          primary: "#ffffff",
          secondary: "#F6F8F6",
          tertiary: "#555555",
          alternative: "#111111",
          success: "#E6F5ED",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#111111",
          primary: "#111111",
          secondary: "#C4C4C4",
          tertiary: "#444444",
          alternative: "#ffffff",
          success: "#124137",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#121212",
          primary: "#121212",
          secondary: "#555555",
          alternative: "#ffffff",
          success: "#124137",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#121212",
          primary: "#121212",
          secondary: "#555555",
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
