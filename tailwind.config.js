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
        women: "url('/assets/women.jpg')",
        hijab: "url('/assets/hijabwomen.png')",
        BG: "url('/assets/BG.jpg')",
      },
      colors: {
        NavBg: "#00215C1A",
        Header: "#11122C",
        bgGray: "#FAFAFB",
        bgGrayBorder: "#F3F5FA",
        offWhite: "#F3F3F3",
        border: "#70717E1A",
        Location: "#5C5C6E",
        Balance: "#667085",
        Blue: "#1552FD",
        Blu: "#0D3197",
        Chart: "#ECF2FF",
        down: "#BFD7FF",
        month: "#98A2B3",
        nietz: "#000F29",
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
