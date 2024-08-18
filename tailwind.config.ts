import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#00856f",
        "primary-green-hover": "#00453a",
        "primary-green-light": "#dce9e2",
        "primary-green-light-02": "#f7f9f9",
        "primary-beige": "#fffaf1",
        "secondary-gray-headline": "#212529",
        "secondary-gray-paragraph": "#495057",
        "secondary-white": "#ffffff",
      },
      border: {
        custom: "1px solid #DCE9E2",
      },
    },
  },
  plugins: [],
};
export default config;
