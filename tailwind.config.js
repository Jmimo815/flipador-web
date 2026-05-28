
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#452476", // Púrpura Profundo
          grey: "#a3a5a5",   // Gris Metálico
          white: "#FFFFFF",
          black: "#0a0a0a",
        },
        // Configuración para shadcn/ui
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#452476",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#a3a5a5",
          foreground: "#0a0a0a",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
