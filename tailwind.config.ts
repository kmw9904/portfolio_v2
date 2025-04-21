import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-scale-in": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "fade-in-out": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "10%": { opacity: "1", transform: "scale(1)" },
          "90%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "fade-scale-in": "fade-scale-in 0.25s ease-out",
        "fade-in-out": "fade-in-out 3s ease-in-out",
      },
    },
  },
  darkMode: "class", // 다크 모드를 클래스 기반으로 설정
  plugins: [],
};
export default config;
