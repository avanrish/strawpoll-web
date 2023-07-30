/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
