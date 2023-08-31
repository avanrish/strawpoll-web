/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: process.env.NODE_ENV === 'development' ? 'class' : 'media',
  theme: {
    transitionDuration: {
      DEFAULT: '250ms',
    },
    extend: {
      colors: {
        'rock-blue': '#94a3b8',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
