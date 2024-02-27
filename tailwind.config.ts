import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/flowbite-react/lib/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Bricolage_Grotesque: ['Bricolage_Grotesque', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
      colors: {
        background: '#1f0836',
        'light-2': '#64CCC5',
        'dark-1': '#176B87',
        'dark-2': '#0F0F0F',
        purpleText: '#D5B2E6',
        orangeText: '#FFC599',
        'brown-1': '#F39F5A',
        'purple-dark': '#270548',
        'red-normal': '#662549',
        'purple-normal': '#340660',
        'red-normal-1': '#833344',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
};
export default config;
