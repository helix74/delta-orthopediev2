/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Variables CSS personnalisées Delta Orthopédie
        'jelly-bean': 'var(--color-jelly-bean)',
        'sushi': 'var(--color-sushi)',
        'black-haze': 'var(--color-black-haze)',
        'summer-green': 'var(--color-summer-green)',
        'fern-frond': 'var(--color-fern-frond)',
        'oslo-gray': 'var(--color-oslo-gray)',
        'loblolly': 'var(--color-loblolly)',
        'bombay': 'var(--color-bombay)',
        'pine-glade': 'var(--color-pine-glade)',
        'beryl-green': 'var(--color-beryl-green)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 