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
          // Core colors
          espresso: '#5E3023',
          latte: '#895637',
          gold: '#BD9655',
          
          // Light variants
          'espresso-light': '#8A5A4A',
          'latte-light': '#B48765',
          'gold-light': '#D5B887',
          
          // Dark variants
          'espresso-dark': '#3D1E15',
          'latte-dark': '#5C3923',
          'gold-dark': '#9D7B46',
          
          // Extra light variants (for backgrounds, etc.)
          'espresso-50': '#F5F0EE',
          'latte-50': '#F7F3F0',
          'gold-50': '#FAF7F1',
          
          // Extra light variants
          'espresso-100': '#E5D5D0',
          'latte-100': '#EBE0D8',
          'gold-100': '#F2EBD9'
        }
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 