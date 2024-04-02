/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#47484E',
       buttonGray : '#5E6062',
        spanGray: '#282828',
        profiletext: '#5E6062'
      },
      boxShadow: {
        customshadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.13)',
      },
    },
  },
  plugins: [],
};
