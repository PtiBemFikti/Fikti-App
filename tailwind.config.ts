import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        Bricolage_Grotesque: ["Bricolage_Grotesque", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        CircleAmolens: ["Circle Amolens", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        background: "#1f0836",
        "light-2": "#64CCC5",
        "dark-1": "#176B87",
        "dark-2": "#0F0F0F",
        purpleText: "#D5B2E6",
        orangeText: "#FFC599",
        "brown-1": "#F39F5A",
        "purple-dark": "#270548",
        "red-normal": "#662549",
        "purple-normal": "#340660",
        "red-normal-1": "#833344",
      },
      listStyleType: {
        "lower-alpha": "lower-alpha",
        "upper-alpha": "upper-alpha",
      },
    },
  },

  plugins: [require("daisyui"), nextui()],
};
export default config;
