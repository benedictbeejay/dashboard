/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('/assets/BG(1).png')",
      },
      colors: {
        NavBg: "#00215C1A",
        Header: "#11122C",
        bgGray: "#FAFAFB",
        bgGrayBorder: "#F3F5FA",
        offWhite: "#F3F3F3",
        border: "#70717E1A",
        Location: "#5C5C6E",
      },
      fontFamily: {
        title: ["Geist", "sans-serif"],
      },
      height: {
        // 8600: "400rem",
      },
    },
  },
  plugins: [],
};
