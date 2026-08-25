/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090d16", // Deep Slate Black
        surface: "#111827", // Card Surface
        primary: "#6366f1", // Electric Indigo
        secondary: "#06b6d4", // Cyber Cyan
        accent: "#10b981", // Emerald success/accent
        muted: "#94a3b8", // Slate gray
        card: "rgba(17, 24, 39, 0.4)",
        "card-hover": "rgba(17, 24, 39, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        headline: ["Geist", "sans-serif"],
        display: ["Geist", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'blob': "blob 7s infinite",
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
