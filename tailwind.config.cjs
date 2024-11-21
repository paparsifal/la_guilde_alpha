/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'guild-primary': '#2c3e50',
        'guild-secondary': '#3498db',
        'guild-accent': '#e74c3c',
      },
    },
  },
  plugins: [],
}
