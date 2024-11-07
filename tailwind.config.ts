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
        "gradient-sunburst": "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        "gradient-bluemist": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      colors: {
        "aqua-pastel": "#D0F4F5",
        "aqua-pastel-light": "#E6FBFC",
        "lavender-pastel": "#E4DBFF",
        "lavender-pastel-light": "#F2F0FF",
        "sunshine-pastel": "#FFF6D9",
        "sunshine-pastel-light": "#FFFDF2",
      },
    },
  },
  plugins: [],
};
export default config;
