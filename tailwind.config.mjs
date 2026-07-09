/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        dark: '#0f172a',
        card: '#1e293b',
      },
    },
  },
  plugins: [],
};
