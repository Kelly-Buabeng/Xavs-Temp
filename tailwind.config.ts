import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wavy: "wave 2s infinite ease-in-out",
      },
      keyframes: {
        wave: {
          "0%": { d: 'path("M0,5 Q25,10 50,5 T100,5")' },
          "25%": { d: 'path("M0,5 Q25,0 50,5 T100,5")' },
          "50%": { d: 'path("M0,5 Q25,8 50,5 T100,5")' },
          "75%": { d: 'path("M0,5 Q25,12 50,5 T100,5")' },
          "100%": { d: 'path("M0,5 Q25,10 50,5 T100,5")' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        semiblack: "#0d1117",
        searchColor: "rgba(46, 55, 74, .82)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
