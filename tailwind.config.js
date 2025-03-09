/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const theme = {
  extend: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      background: "#1c1c22",
      primary: "#fff4cc",
      secondary: {
        DEFAULT: "#f4b400",
        hover: "#ffdd78",
      },
    },
  },
};
export const plugins = [];
