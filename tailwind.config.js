/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vikasa: {
          espresso: '#5E3023',
          latte: '#895637',
          gold: '#BD9655'
        }
      },
    },
  },
  plugins: [],
} 