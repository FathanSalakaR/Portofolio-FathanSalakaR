/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hd': '1280px',
        'fhd': '1920px',
        '2k': '2560px',
        '4k': '3840px',
      },
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#0284C7",
          dim: "#0369A1",
          glow: "#38BDF8",
        },
        secondary: {
          DEFAULT: "#0EA5E9",
          dim: "#0284C7",
        },
        accent: {
          DEFAULT: "#2563EB",
          dim: "#1D4ED8",
        },
        text: {
          DEFAULT: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Satoshi",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: ["Inter", "Satoshi", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(2, 132, 199, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.05) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(56, 189, 248, 0.14), transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 10px 30px -5px rgba(2, 132, 199, 0.15)",
        "glow-cyan": "0 10px 30px -5px rgba(14, 165, 233, 0.18)",
        "glow-pink": "0 10px 30px -5px rgba(37, 99, 235, 0.14)",
        glass: "0 10px 30px -5px rgba(2, 132, 199, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        glow: "glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
