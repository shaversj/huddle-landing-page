/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "cta-shadow": "0px 6px 13px rgba(0, 37, 46, 0.223053)",
        "cta-button-shadow": "0px 6px 13px rgba(0, 37, 46, 0.223053)",
        "feature-shadow": "0px 0px 14px rgba(0, 0, 0, 0.07)",
        "button-shadow": "0px 3px 11px rgba(0, 0, 0, 0.0954201)",
        "hero-button-shadow": "2px 3px 6px 1px rgba(255, 82, 193, 0.166185)",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "very-pale-cyan": "hsl(193, 100%, 96%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
