/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#fffcdc",
      secondary: "#14281d",
    },
  },
};
export const plugins = [];
