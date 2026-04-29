/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors matching the eFranchise System theme
      colors: {
        brand: {
          orange: "#F97316", // primary orange
          "orange-dark": "#EA580C",
          navy: "#1E3A5F", // dark navy blue
          "navy-light": "#1E4D9E",
        },
      },
      // Custom font sizes for consistency
      fontSize: {
        "2xs": "0.625rem",
      },
    },
  },
  plugins: [],
};
