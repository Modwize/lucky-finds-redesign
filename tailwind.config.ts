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
        // Lucky Finds brand palette
        emerald: {
          DEFAULT: "#1F3A2E",
          deep: "#15291F",
          muted: "#2D5240",
        },
        ivory: {
          DEFAULT: "#F5F0E8",
          warm: "#EDE5D5",
          light: "#FAF6EE",
        },
        brass: {
          DEFAULT: "#C9A961",
          dark: "#A88841",
          light: "#DCC084",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          muted: "#3A3A3A",
        },
        border: "hsl(35 25% 85%)",
        input: "hsl(35 25% 85%)",
        ring: "hsl(155 31% 18%)",
        background: "#F5F0E8",
        foreground: "#1A1A1A",
        primary: {
          DEFAULT: "#1F3A2E",
          foreground: "#F5F0E8",
        },
        secondary: {
          DEFAULT: "#EDE5D5",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#EDE5D5",
          foreground: "#3A3A3A",
        },
        accent: {
          DEFAULT: "#C9A961",
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "hsl(0 60% 45%)",
          foreground: "#F5F0E8",
        },
        card: {
          DEFAULT: "#FAF6EE",
          foreground: "#1A1A1A",
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
