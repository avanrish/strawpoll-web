/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4f46e5',
          'primary-focus': '#4338ca',
          'primary-content': '#ffffff',
          secondary: '#6366f1',
          'secondary-focus': '#4f46e5',
          'secondary-content': '#ffffff',
          accent: '#a5b4fc',
          base: '#4b5563',
          'base-100': '#ffffff',
          'base-200': '#f3f4f6',
          'base-300': '#374151',
          'base-content': '#6b7280',
          neutral: '#111827',
        },
        // 'dark': {
        //   'base-100': '#374151',
        //   'base-200': '#1F2937',
        //   'base-300': '#111827',
        //   'base-content': '#6b7280'
        // }
      },
    ],
  },
  plugins: [require('daisyui')],
};
