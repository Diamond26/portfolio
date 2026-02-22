import type { Config } from "tailwindcss";

const config: Config = {
    // Enable dark mode via class on <html>
    darkMode: "class",

    // Only scan files that may use Tailwind classes
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            // Custom color palette — technical dark theme
            colors: {
                background: {
                    DEFAULT: "#09090b", // Very dark zinc
                    secondary: "#111113",
                    card: "#18181b",
                },
                border: {
                    DEFAULT: "#27272a",
                    accent: "#3f3f46",
                },
                text: {
                    primary: "#fafafa",
                    secondary: "#a1a1aa",
                    muted: "#52525b",
                },
                accent: {
                    DEFAULT: "#6366f1", // Indigo
                    light: "#818cf8",
                    dark: "#4f46e5",
                    glow: "rgba(99,102,241,0.15)",
                },
                success: "#22c55e",
            },

            // Font family — Inter for clean technical look
            fontFamily: {
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
                mono: ["JetBrains Mono", "Fira Code", "monospace"],
            },

            // Animate class for smooth reveals
            keyframes: {
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(24px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "blink": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.6s ease forwards",
                "fade-in": "fade-in 0.6s ease forwards",
                "blink": "blink 1s step-end infinite",
            },
        },
    },
    plugins: [],
};

export default config;
