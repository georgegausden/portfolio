import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        '15': 'repeat(15, minmax(0, 1fr))', // Custom 15-column grid
        // Add more custom column configurations if needed
      },
      gridTemplateRows: {
        '15': 'repeat(15, minmax(0, 1fr))', // Custom 15-column grid
        // Add more custom column configurations if needed
      },
    },

    
  },
  plugins: [],
};
export default config;
