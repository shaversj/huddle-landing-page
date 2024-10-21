/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
