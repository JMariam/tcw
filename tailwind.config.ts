import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'positivus-dark': '#191A23',
        'positivus-green': '#B9FF66',
        'positivus-grey': '#F3F3F3',
      },
    },
  },
  plugins: [],
};
export default config;
