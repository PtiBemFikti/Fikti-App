import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        Bricolage_Grotesque: ['Bricolage_Grotesque', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        CircleAmolens: ['Circle Amolens', 'sans-serif'],
        Urbanist: ['Urbanist', 'sans-serif'],
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
        'green-fikti': '#36B276',
        'dark-green-fikti': '#012F24',
        'cream-fikti': '#F1F1BC',
        'cyan-fikti': '#2CD0B0',
        'dark-purple': '#25274D',
        'light-purple': '#6C2A87'
      },
      listStyleType: {
        'lower-alpha': 'lower-alpha',
        'upper-alpha': 'upper-alpha',
      },
      boxShadow: {
        'custom-right-bottom': '5px 5px 10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
        marqueereverse: 'marqueereverse 45s linear infinite',
        marqueereverse2: 'marqueereverse2 45s linear infinite',
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueereverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marqueereverse2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },

  plugins: [require('daisyui'), nextui()],
};
export default config;
