/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#33c0ff",
        neonGreen: "#7CFFB2",
        glass: "rgba(255,255,255,0.06)"
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.6)",
        neon: "0 0 18px rgba(51,192,255,0.16), inset 0 0 6px rgba(51,192,255,0.06)"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" }
        },
        glow: {
          "0%,100%": { boxShadow: "0 0 6px rgba(124,255,178,0.12)" },
          "50%": { boxShadow: "0 0 18px rgba(124,255,178,0.28)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
