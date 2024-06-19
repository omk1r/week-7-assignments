/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "avatar-banner": "url('/images/background1.jpeg')",
      },
      colors: {
        myColor: {
          50: "#f6effe",
          100: "#ede0fc",
          200: "#dcc1f9",
          300: "#caa1f7",
          400: "#b982f4",
          500: "#a763f1",
          600: "#864fc1",
          700: "#643b91",
          800: "#432860",
          900: "#211430",
        },
      },
    },
  },
  plugins: [],
};
