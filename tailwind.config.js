/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '26': '6.5rem', // Assuming your base font size is 16px
        // You can adjust the value based on your requirements
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#47484E',
        buttonGray: '#5E6062',
        spanGray: '#282828',
        profiletext: '#5E6062',
        footerbg: 'rgba(0, 0, 0, 0.898)',
        contactGray: '#393939',
        customgrays: '#5E6062',
        customGray1: '#47484E',
        lightGray: '#F7F7F7',
        semiTransparentGray: 'rgba(40, 40, 40, 0.5)',
        border: 'rgba(94, 96, 98, 1)',
        listGreen: '#2BE03D',
        pen: '#4F99E3',
        penbg: '#1671CC',
        del: '#FF2F2F',
        border2: 'rgba(94, 96, 98, 1)',
        sourcebg: '#FDFEFF',
      },
      shadow: {
        overtext: 'rgba(40, 40, 40, 1)',
        Faqchild: 'rgba(103, 103, 103, 1)'
      },
      shadow: { // Corrected typo here
        customshadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.13)',
        custom: '0px 0px 15px 5px var(--shadow-color)',
      },
    },
  },
};
