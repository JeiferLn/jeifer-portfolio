/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const theme = {
  extend: {
    screens: {

    },
    colors: {
      background: "#1c1c22",
      primary: {
        DEFAULT: "#fff4cc",
        description: "#b0b0b0",
      },
      secondary: {
        DEFAULT: "#f4b400",
        hover: "#ffdd78",
      },
      container: "#292930",
    },
  },
};
export const plugins = [];
