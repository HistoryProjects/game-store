/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        160: "160px",
        190: "190px",
        250: "250px",
        280: "280px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        180: "180px",
        250: "250px",
        275: "275px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "100vh": "100vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        "sl": "320px",
        "sx": "480px",
        "sm": "640px",
        "md2": "768px",
        "md1": "960px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "3xl": "1600px"
      },
      colors: {
        headBg: "#4A362D", 
        pageBg: "#2E2419",
        orng: "#EBB110",
        dopColor: "#A9A9A7",
        brandsBg: "#F2E5D8",
        grayS: "#575656",
        grayF: "#453E3E",
      }
    },
  },
  plugins: [],
}

