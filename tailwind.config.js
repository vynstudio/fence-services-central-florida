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
      colors: {
        brand: {
          navy: "#0F2744",
          "navy-deep": "#0A1A2E",
          copper: "#B87333",
          "copper-light": "#C9925A",
          cream: "#F5F3EF",
          charcoal: "#1A1A1A",
          black: "#0A1A2E",
          white: "#ffffff",
        },
        neutral: {
          DEFAULT: "#5C6570",
          black: "#0A1A2E",
          white: "#ffffff",
          lightest: "#F5F3EF",
          lighter: "#E4E0D9",
          light: "#B8B3A9",
          dark: "#3D4654",
          darker: "#1A2433",
          darkest: "#0A1A2E",
        },
        background: {
          DEFAULT: "#ffffff",
          primary: "#ffffff",
          secondary: "#F5F3EF",
          tertiary: "#5C6570",
          alternative: "#0F2744",
          success: "#ecfdf3",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#0F2744",
          primary: "#0F2744",
          secondary: "#B8B3A9",
          tertiary: "#3D4654",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#0F2744",
          primary: "#0F2744",
          secondary: "#5C6570",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#0F2744",
          primary: "#0F2744",
          secondary: "#5C6570",
          alternative: "#ffffff",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-meridian)",
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
