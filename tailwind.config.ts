import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Lucky Finds brand palette — dark by default
        emerald: {
          DEFAULT: "#1F3A2E",
          deep: "#15291F",       // canvas
          elevated: "#243F32",   // lifted surfaces (trust band, consign CTA, modals)
          muted: "#2D5240",      // hover states
        },
        ivory: {
          DEFAULT: "#F5F0E8",
          warm: "#EDE5D5",
          light: "#FAF6EE",
          dim: "#C9C0B0",        // secondary text on dark canvas
        },
        brass: {
          DEFAULT: "#C9A961",
          dark: "#A88841",
          light: "#DCC084",      // primary CTA + hover on dark
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          muted: "#3A3A3A",
        },
        // shadcn token aliases now point to dark values
        border: "rgba(245, 240, 232, 0.12)",
        input: "rgba(245, 240, 232, 0.18)",
        ring: "#C9A961",
        background: "#15291F",
        foreground: "#F5F0E8",
        primary: {
          DEFAULT: "#C9A961",
          foreground: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#243F32",
          foreground: "#F5F0E8",
        },
        muted: {
          DEFAULT: "#1F3A2E",
          foreground: "#C9C0B0",
        },
        accent: {
          DEFAULT: "#C9A961",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "hsl(0 60% 55%)",
          foreground: "#F5F0E8",
        },
        card: {
          DEFAULT: "#1F3A2E",
          foreground: "#F5F0E8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "2px",
        md: "2px",
        sm: "2px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
