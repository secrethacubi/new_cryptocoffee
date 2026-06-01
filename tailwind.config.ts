import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0C0A09",
        "bg-elevated": "#1A1714",
        "bg-card": "#1E1B17",
        "bg-card-hover": "#262320",
        surface: "#2A2621",
        line: "#3D372F",
        "line-subtle": "#2E2A24",
        text: {
          DEFAULT: "#FAF7F2",
          secondary: "#B5AFA6",
          muted: "#7D7771",
        },
        espresso: {
          DEFAULT: "#C8956C",
          bright: "#E4B48E",
          deep: "#8B5E3C",
        },
        gold: "#D4A853",
        cream: "#F5E6D3",
        red: "#D46A6A",
        green: "#7BC47F",
        blue: "#6A9ED4",
        purple: "#A67BD4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      backgroundImage: {
        espresso: "linear-gradient(135deg, #C8956C, #D4A853)",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.2" },
          "100%": { transform: "translateY(-100vh) translateX(40px) scale(2.2)", opacity: "0" },
        },
        livepulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(123,196,127,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(123,196,127,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(123,196,127,0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
      },
      animation: {
        livepulse: "livepulse 2s infinite",
        "scroll-cue": "bounce 2.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
