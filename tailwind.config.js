/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff0033",
          crimson: "#d90429",
          dark: "#050506",
          card: "#0f0f13",
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['"Bebas Neue"', 'cursive'],
        tech: ['"Space Grotesk"', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
