import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a0a2a",
        dusk: "#1e1a4a",
        ember: "#ff7259",
        aurora: "#5ac8fa",
        gold: "#ffc857"
      },
      fontFamily: {
        persona: ["'Figtree'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(115deg, rgba(90,200,250,0.2) 0%, rgba(255,200,87,0.15) 40%, rgba(255,114,89,0.15) 100%), radial-gradient(circle at top, rgba(90,200,250,0.3), rgba(14,14,40,0.8))"
      },
      boxShadow: {
        neon: "0 0 30px rgba(90,200,250,0.45)",
        "card-inner": "inset 0 1px 0 rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
